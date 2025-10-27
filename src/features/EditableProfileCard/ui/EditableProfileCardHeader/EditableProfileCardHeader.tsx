import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import s from "./EditableProfileCardHeader.module.scss";
import { HStack } from "@/shared/ui/Stack";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";
import { profileActions } from "../../model/slice/profileSlice";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { getUserAuthData } from "@/entities/User";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData";
import { Text } from "@/shared/ui/Text";
import { Button, ButtonTheme } from "@/shared/ui/Button";

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
  const { className } = props;
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
    <HStack max justify="between" className={className}>
      <Text title={t("Profile")} />
      {canEdit &&
        (readonly ? (
          <Button
            className={s.editBtn}
            data-testid="EditableProfileCardHeader.EditButton"
            theme={ButtonTheme.OUTLINE}
            onClick={onEdit}
          >
            {t("Edit")}
          </Button>
        ) : (
          <div className={s.buttons}>
            <Button
              data-testid="EditableProfileCardHeader.CancelButton"
              theme={ButtonTheme.OUTLINE_RED}
              onClick={onCancelEdit}
            >
              {t("Cancel")}
            </Button>
            <Button data-testid="EditableProfileCardHeader.SaveButton" theme={ButtonTheme.OUTLINE} onClick={onSave}>
              {t("Save")}
            </Button>
          </div>
        ))}
    </HStack>
  );
});
