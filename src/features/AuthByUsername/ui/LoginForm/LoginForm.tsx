import { useTranslation } from "react-i18next";
import s from "./LoginForm.module.scss";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Input } from "@/shared/ui/Input/Input";

export const LoginForm = () => {
  const { t } = useTranslation();
  return (
    <div className={classNames(s.loginModal, {}, [])}>
      <Input autofocus type="text" placeholder={t("enterUsername")} />
      <Input type="text" placeholder={t("enterPassword")} />
      <Button className={s.loginBtn} theme={ButtonTheme.OUTLINE}>
        {t("login")}
      </Button>
    </div>
  );
};
