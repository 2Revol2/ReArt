import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "../constants/localStorage";

export const baseInstance = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY),
  },
});
