import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import s from "./ProfilePageHeader.module.scss";
import { Text } from "@/shared/ui/Text/Text";
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from "@/entities/Profile";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";
import { getUserAuthData } from "@/entities/User";

export const ProfilePageHeader = () => {
  const { t } = useTranslation("profile");
  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={s.header}>
      <Text title={t("Profile")} />
      {canEdit &&
        (readonly ? (
          <Button className={s.editBtn} theme={ButtonTheme.OUTLINE} onClick={onEdit}>
            {t("Edit")}
          </Button>
        ) : (
          <div className={s.buttons}>
            <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
              {t("Cancel")}
            </Button>
            <Button theme={ButtonTheme.OUTLINE} onClick={onSave}>
              {t("Save")}
            </Button>
          </div>
        ))}
    </div>
  );
};
