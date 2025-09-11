import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";
import { UserRoles } from "../../consts/consts";

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles;

export const getIsUserAdmin = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRoles.ADMIN)));
export const getIsUserManager = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRoles.MANAGER)));
