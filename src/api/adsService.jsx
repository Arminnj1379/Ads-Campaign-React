import api from "./httpService";

export const saveAds = (data) => api.post("/Ad/add", data);
