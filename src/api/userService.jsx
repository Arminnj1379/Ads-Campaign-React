import api from "./httpService";

export const getUsers = () => api.get("/user/getall");

export const getUserById = (id) => api.get(`/user/getbyid/${id}`);

export const createUser = async (data) => api.post("/User/Create", data);

// export const updateUser = (id, data) => api.put(`/users/${id}`, data);

// export const deleteUser = (id) => api.delete(`/users/${id}`);
