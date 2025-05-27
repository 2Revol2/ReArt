import { useTranslation } from "react-i18next";
import s from "./ProfileCard.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Text, TextAlign, TextTheme } from "@/shared/ui/Text/Text";
import { Input } from "@/shared/ui/Input/Input";
import { Profile } from "../../model/types/profile";
import { Spinner } from "@/shared/ui/Spinner/Spinner";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeLastname: (value?: string) => void;
  onChangeFirstname: (value?: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { className, data, isLoading, error, readonly, onChangeLastname, onChangeFirstname } = props;

  const { t } = useTranslation("profile");

  if (isLoading) {
    return (
      <div className={classNames(s.profileCard, {}, [className, s.loading])}>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(s.profileCard, {}, [className, s.error])}>
        <Text
          align={TextAlign.CENTER}
          theme={TextTheme.ERROR}
          title={t("There was an error loading your profile")}
          text={t("Try refresh the page")}
        />
      </div>
    );
  }

  return (
    <div className={classNames(s.profileCard, {}, [className])}>
      <div className={s.data}>
        <Input
          className={s.input}
          value={data?.first}
          placeholder={t("Your name")}
          onChange={onChangeFirstname}
          readonly={readonly}
        />
        <Input
          className={s.input}
          value={data?.lastname}
          placeholder={t("Your surname")}
          onChange={onChangeLastname}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
