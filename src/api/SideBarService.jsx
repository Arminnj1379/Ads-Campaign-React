import api from './httpService';

export const getAllCategories = () => api.get('/Category/GetAll');