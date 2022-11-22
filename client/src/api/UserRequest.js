import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem("profile")) {
//     req.headers.Authorization = `Bearer ${JSON.parse(
//       localStorage.getItem("profile").token
//     )}`;
//   }
//   return req;
// });

export const getUser = (userId) => API.get(`/user/${userId}`);
export const updateUser = (id, formData) => API.put(`/user/${id}`, formData);
export const getAllUser = () => API.get("/user");
export const addUser = (id, data) => API.put(`/user/${id}/add`, data);
export const removeUser = (id, data) => API.put(`/user/${id}/remove`, data);
