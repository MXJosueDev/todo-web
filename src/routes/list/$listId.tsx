import TaskList from '@/components/list/tasks/TaskList/TaskList';
import TaskForm from '@/components/list/tasks/TaskForm';
import TasksInstructions from '@/components/list/tasks/TasksInstructions';
import { createFileRoute, notFound } from '@tanstack/react-router';
import {
    listDataQueryOptions,
    listTasksQueryOptions,
} from '@/api/queryOptions';
import { Container } from 'react-grid-system';
import ListDescription from '@/components/list/ListDescription';
import NotFound from '@/components/shared/NotFound';
import { AxiosError } from 'axios';
import { useEffect } from 'react';
import useListsStore from '@/stores/listsStore';
import { useList } from '@/hooks/useTasks';

export const Route = createFileRoute('/list/$listId')({
    loader: async ({ context: { queryClient }, params: { listId } }) => {
        try {
            await queryClient.ensureQueryData(listTasksQueryOptions(listId));
            await queryClient.ensureQueryData(listDataQueryOptions(listId));
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.status === 404) {
                    throw notFound();
                }
            }
        }
    },
    component: List,
    notFoundComponent: NotFound,
});

function List() {
    const listsStore = useListsStore();
    const params = Route.useParams();
    const { data } = useList(params.listId);

    useEffect(() => {
        if (data) {
            listsStore.updateList(params.listId, data.title, true); // TODO: Update on update
        }
    }, [data, listsStore, params.listId]);

    return (
        <Container className="w-full mt-10">
            <ListDescription />

            <TaskForm />

            <TasksInstructions />
            <TaskList />
        </Container>
    );
}
