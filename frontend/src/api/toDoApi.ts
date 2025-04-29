import { apiClient } from "./client";
import { ToDo } from "../types/toDo";

async function getAllToDos(): Promise<ToDo[]> {
    const response = await apiClient.get<ToDo[]>("/todos/");
    return response.data;
}

async function getToDoById(id: number): Promise<ToDo> {
    const response = await apiClient.get<ToDo>(`/todos/${id}`);
    return response.data;
}

async function addToDo(toDo: ToDo): Promise<ToDo> {
    const response = await apiClient.post<ToDo>('/todos/', toDo);
    return response.data;
}

async function updateToDo(id: number, toDo: ToDo): Promise<ToDo> {
    const response = await apiClient.put<ToDo>(`/todos/${id}`, toDo);
    return response.data;
}

async function deleteToDo(id: number): Promise<ToDo> {
    const response = await apiClient.delete(`/todos/${id}`);
    return response.data;
}

export const toDoApi = {
    getAll: getAllToDos,
    getById: getToDoById,
    add: addToDo,
    update: updateToDo,
    delete: deleteToDo,
};
