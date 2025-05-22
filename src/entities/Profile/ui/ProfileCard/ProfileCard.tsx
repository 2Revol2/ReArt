import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import s from "./ProfileCard.module.scss";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { classNames } from "@/shared/lib/classNames/classNames";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { Text } from "@/shared/ui/Text/Text";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation("profile");

  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(s.profileCard, {}, [className])}>
      <div className={s.header}>
        <Text title={t("Profile")} />
        <Button className={s.editBtn} theme={ButtonTheme.OUTLINE}>
          {t("Edit")}
        </Button>
      </div>
      <div className={s.data}>
        <Input className={s.input} value={data?.first} placeholder={t("Your name")} />
        <Input className={s.input} value={data?.lastname} placeholder={t("Your surname")} />
      </div>
    </div>
  );
};
