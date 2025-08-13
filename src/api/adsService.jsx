import api from "./httpService";

export const saveAds = (data) => api.postForm("/Ad/add", data);

export const getAllAds = async (data) => await api.post("/Ad/GetAll", data);

export const getByIdAds = (id) => api.get("/Ad/GetById?id=" + id);

export const getByUserIdAds = () => api.get("/Ad/GetByUserId");

export const deleteAds = (id) => api.get("/Ad/Delete?id=" + id);

export const updateAds = (id, data) => api.get("/Ad/Update?id=" + id, data);

export const viewAds = (id) => api.post("/Ad/IncrementViewCount?id=" + id);

export const getRelatedAds = (id) => api.get("/Ad/GetRelatedAdsWithImages?adId=" + id);
