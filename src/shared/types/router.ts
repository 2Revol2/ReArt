import { RouteProps } from "react-router-dom";
// eslint-disable-next-line revol/layer-imports
import { UserRoles } from "@/entities/User";

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRoles[];
};
