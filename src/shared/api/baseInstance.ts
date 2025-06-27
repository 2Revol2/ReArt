import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "../constants/localStorage";

export const baseInstance = axios.create({
  baseURL: __API__,
});

baseInstance.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || "";
  return config;
});
