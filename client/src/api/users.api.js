import axios from "axios";

const URL =
  process.env.NODE_ENV === "production"
    ? import.meta.env.VITE_BACKEND_URL
    : "http://localhost:8000";

console.log(URL);
const usersApi = axios.create({
  baseURL: `${URL}/users/api/v1/users`,
});

export const getAllUsers = () => usersApi.get("/");

export const getUser = (id) => usersApi.get(`/${id}`);

export const createUser = (user) => usersApi.post("/", user);

export const updateUser = (id, user) => usersApi.put(`/${id}/`, user);

export const deleteUser = (id) => usersApi.delete(`/${id}`);
