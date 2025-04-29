export interface ToDo {
    id: number;
    title: string;
    description: string | null;
    completed: boolean | false;
    created_at: string | null;
    updated_at: string | null;
}
