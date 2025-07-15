import api from "./httpService";

export const saveAds = (data) => api.postForm("/Ad/add", data);

export const getAllAds = async (data) => await api.get("/Ad/GetAll");

export const getByIdAds = (id) => api.post("/Ad/GetById?" + id);

export const getByUserIdAds = () => api.get("/Ad/GetByUserId");

export const deleteAds = (id) => api.get("/Ad/Delete?" + id);

export const updateAds = (id, data) => api.get("/Ad/Update?" + id, data);
