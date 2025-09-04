import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { USER_LOCALSTORAGE_KEY } from "../constants/localStorage";

export const rtkApi = createApi({
  reducerPath: "rtkApi",
  baseQuery: fetchBaseQuery({
    baseUrl: __API__,
    prepareHeaders: (header) => {
      const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || "";
      if (token) {
        header.set("Authorization", token);
      }

      return header;
    },
  }),
  endpoints: () => ({}),
});
