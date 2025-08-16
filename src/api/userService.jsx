import api from "./httpService";

export const getUsers = () => api.get("/user/getall");

export const getUserById = (id) => api.get(`/user/getbyid?${id}`);

export const createUser = async (data) => api.post("/User/Create", data);

export const loggedInUser = async () => api.get("/User/GetLoggedInUser");

// export const updateUser = (id, data) => api.put(`/users/${id}`, data);

export const deleteUser = (id) => api.delete(`/user/Delete?id=${id}`);

export const addAdmin = (id) => api.post(`/user/AddOrRemoveAdmin?userid=${id}`);
