import axios from "axios";

const instance = axios.create({
  baseURL: "https://mern-my-todo.onrender.com",
});

export default instance;
