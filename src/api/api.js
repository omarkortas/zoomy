import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", 
});

//tokennn
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers["Authorization"] = `Bearer ${token}`;

    if (!(config.data instanceof FormData)) {
      config.headers["Content-Type"] = "application/json";
    } else {
      delete config.headers["Content-Type"]; 
    }

    return config;
  },
  (error) => Promise.reject(error)
);

//auth
export const loginUser = async (email, password) => {
  const res = await api.post("/auth/login", { email, password });
  const { token } = res.data || {};
  if (token) localStorage.setItem("token", token);
  return res.data; 
};

export const registerUser = async (name, email, password, phoneNumber) => {
  return (await api.post("/auth/register", { name, email, password, phoneNumber })).data;
};

//publications
export const getPublications = async () => (await api.get("/publications")).data;

export const createPublication = async (title, description, type, imageFile) => {
  let data;
  if (imageFile) {
    data = new FormData();
    data.append("title", title);
    data.append("description", description);
    data.append("type", type);
    data.append("image", imageFile);
  } else {
    data = { title, description, type };
  }
  return (await api.post("/publications", data)).data;
};

export const updatePublication = async (id, updatedData) =>
  (await api.patch(`/publications/${id}`, updatedData)).data;

export const deletePublication = async (id) =>
  (await api.delete(`/publications/${id}`)).data;

//roadmapss
export const getRoadmaps = async () => (await api.get("/roadmaps")).data;

export const createRoadmap = async (title, description, userId) =>
  (await api.post("/roadmaps", { title, description, userId })).data;

export const updateRoadmap = async (id, updatedData) =>
  (await api.patch(`/roadmaps/${id}`, updatedData)).data;

export const deleteRoadmap = async (id) =>
  (await api.delete(`/roadmaps/${id}`)).data;

//tasks
export const getTasks = async () => (await api.get("/tasks")).data;

export const createTask = async (title, description, status, deadline, roadmapId) =>
  (await api.post("/tasks", { title, description, status, deadline, roadmapId })).data;

export const updateTask = async (id, updatedData) =>
  (await api.patch(`/tasks/${id}`, updatedData)).data;

export const deleteTask = async (id) =>
  (await api.delete(`/tasks/${id}`)).data;

//dash
export const getDashboard = async () => (await api.get("/dashboard")).data;

export default api;
