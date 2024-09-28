import axios from 'axios';
import { List, Task } from './types';

const taskApi = axios.create({
    baseURL: import.meta.env.VITE_TASKS_API_URL,
});

export function createList(data: { title: string }) {
    return taskApi.post('/list/', data);
}

export async function getListData(listId: string): Promise<List> {
    const res = await taskApi.get(`/list/${listId}/`);

    return res.data;
}

export function deleteList(data: { uuid: string }) {
    return taskApi.delete(`/list/${data.uuid}/`);
}

export function patchList({ uuid, ...rest }: { uuid: string; title: string }) {
    return taskApi.patch(`/list/${uuid}/`, rest);
}

export async function getListTasks(listId: string): Promise<Task[]> {
    const res = await taskApi.get(`/list/${listId}/tasks/`);

    return res.data;
}

export function createTask({
    list_uuid,
    ...rest
}: {
    title: string;
    compleded: boolean;
    list_uuid: string;
}) {
    return taskApi.post(`/list/${list_uuid}/tasks/`, rest);
}

export function deleteTask(data: { id: number; list_uuid: string }) {
    return taskApi.delete(`/list/${data.list_uuid}/tasks/${data.id}/`);
}

export function patchTask({
    id,
    list_uuid,
    ...rest
}: {
    id: number;
    title: string;
    completed: boolean;
    list_uuid: string;
}) {
    return taskApi.patch(`/list/${list_uuid}/tasks/${id}/`, rest);
}

export function toggleTask({
    id,
    completed,
    list_uuid,
}: {
    id: number;
    completed: boolean;
    list_uuid: string;
}) {
    return taskApi.patch(`/list/${list_uuid}/tasks/${id}/`, {
        completed: !completed,
    });
}
