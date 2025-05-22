import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { fetchProfileData, ProfileCard, profileReducer } from "@/entities/Profile";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";

const reducers: ReducersList = { profile: profileReducer };

const ProfilePage = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader removeAfterUnmout reducers={reducers}>
      <ProfileCard />
    </DynamicModuleLoader>
  );
};
export default ProfilePage;
