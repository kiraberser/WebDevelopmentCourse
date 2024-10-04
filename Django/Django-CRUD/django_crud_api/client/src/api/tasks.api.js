import axios from 'axios';

const taskApi = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/' // Cambié a baseURL
});

export const getAllTasks = () => {
    return taskApi.get('/'); // Añado el return para devolver la promesa
};

export const getTask = (id) => {
    return taskApi.get(`/${id}/`); // Añado el return para devolver la promesa
};

export const createTask = (task) => {
    return taskApi.post('/', task); // También añado el return aquí
};

export const deleteTask = (id) => {
    return taskApi.delete(`/${id}/`)
}

export const updateTask = (id, task) => {
    return taskApi.put(`/${id}/`, task)
}
