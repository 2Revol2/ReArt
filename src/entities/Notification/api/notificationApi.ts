import { rtkApi } from "@/shared/api/rtkApi";
import type { Notification } from "../model/types/notification";

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotification: build.query<Notification[], null>({
      query: () => ({
        url: "/notifications",
      }),
    }),
  }),
});

export const useGetNotifications = notificationApi.useGetNotificationQuery;
