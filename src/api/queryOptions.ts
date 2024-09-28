import { queryOptions } from '@tanstack/react-query';
import { List, Task } from './types';
import { getListData, getListTasks } from './TasksAPI';

const interval = import.meta.env.VITE_REFETCH_INTERVAL;

export const listTasksQueryOptions = (listId: string) =>
    queryOptions<Task[]>({
        queryKey: ['tasks', { listId }],
        queryFn: async () => getListTasks(listId),
        refetchInterval: interval,
    });

export const listDataQueryOptions = (listId: string) =>
    queryOptions<List>({
        queryKey: ['list', { listId }],
        queryFn: async () => getListData(listId),
        refetchInterval: interval,
    });
