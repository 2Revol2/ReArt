import { useTranslation } from "react-i18next";
import s from "./ProfileCard.module.scss";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import { Text, TextAlign, TextTheme } from "@/shared/ui/Text/Text";
import { Input } from "@/shared/ui/Input/Input";
import { Profile } from "../../model/types/profile";
import { Spinner } from "@/shared/ui/Spinner/Spinner";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Currency, CurrencySelect } from "@/entities/Currency";
import { Country, CountrySelect } from "@/entities/Country";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeLastname: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeFirstname?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency?: Currency) => void;
  onChangeCountry?: (country?: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeLastname,
    onChangeFirstname,
    onChangeCity,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;

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

  const mods: Mods = {
    [s.editing]: !readonly,
  };

  return (
    <div className={classNames(s.profileCard, mods, [className])}>
      <div className={s.data}>
        {data?.avatar && (
          <div className={s.avatarWrapper}>
            <Avatar src={data.avatar} alt="Avatar" />
          </div>
        )}
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
        <Input
          className={s.input}
          value={data?.age}
          placeholder={t("Your age")}
          onChange={onChangeAge}
          readonly={readonly}
        />
        <Input
          className={s.input}
          value={data?.city}
          placeholder={t("City")}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          className={s.input}
          value={data?.username}
          placeholder={t("Your username")}
          onChange={onChangeUsername}
          readonly={readonly}
        />

        <Input
          className={s.input}
          value={data?.avatar}
          placeholder={t("Your avatar")}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
        <CurrencySelect value={data?.currency} onChange={onChangeCurrency} readonly={readonly} />
        <CountrySelect value={data?.country} onChange={onChangeCountry} readonly={readonly} />
      </div>
    </div>
  );
};
