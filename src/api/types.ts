export interface Task {
    id: number;
    title: string;
    completed: boolean;
    updated_at: string;
}

export interface List {
    uuid: string;
    title: string;
    created_at: string;
}
