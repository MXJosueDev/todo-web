import {
    listDataQueryOptions,
    listTasksQueryOptions,
} from '@/api/queryOptions';
import {
    createTask,
    deleteTask,
    patchList,
    patchTask,
    toggleTask,
} from '@/api/TasksAPI';
import {
    useMutation,
    useQuery,
    useQueryClient,
    useSuspenseQuery,
} from '@tanstack/react-query';

export function useTasks(listId: string) {
    return useSuspenseQuery(listTasksQueryOptions(listId));
}

export function useList(listId: string) {
    return useQuery(listDataQueryOptions(listId));
}

export function useCreateTask(listId: string) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ['tasks', { listId }],
        mutationFn: createTask,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks', { listId }] });
        },
    });
}

export function useDeleteTask(listId: string) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ['tasks', { listId }],
        mutationFn: deleteTask,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks', { listId }] });
        },
    });
}

export function usePatchTask(listId: string) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ['tasks', { listId }],
        mutationFn: patchTask,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
        },
    });
}

export function usePatchList(listId: string) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ['list', { listId }],
        mutationFn: patchList,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['list', { listId }] });
        },
    });
}

export function useToggleTask(listId: string) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ['tasks', { listId }],
        mutationFn: toggleTask,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks', { listId }] });
        },
    });
}
