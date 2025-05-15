import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import s from "./LoginForm.module.scss";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Input } from "@/shared/ui/Input/Input";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "@/shared/ui/Text/Text";

export const LoginForm = memo(() => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState);
  const onChangeUsermame = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(s.loginModal, {}, [])}>
      <Text title={t("authorizationForm")} />
      {error && <Text text={t("Incorrect username or password")} theme={TextTheme.ERROR} />}
      <Input
        onChange={onChangeUsermame}
        value={username}
        autofocus
        type="text"
        placeholder={t("enterUsername")}
      />
      <Input
        onChange={onChangePassword}
        value={password}
        type="text"
        placeholder={t("enterPassword")}
      />
      <Button
        className={s.loginBtn}
        theme={ButtonTheme.OUTLINE}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t("login")}
      </Button>
    </div>
  );
});
