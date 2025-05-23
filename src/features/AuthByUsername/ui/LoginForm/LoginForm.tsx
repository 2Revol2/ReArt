import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import s from "./LoginForm.module.scss";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Input } from "@/shared/ui/Input/Input";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "@/shared/ui/Text/Text";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";

const initialReducers: ReducersList = { loginForm: loginReducer };

interface LoginFormProps {
  onSuccess: () => void;
}

const LoginForm = memo(({ onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

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

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));

    if (result.meta.requestStatus === "fulfilled") {
      onSuccess();
    }
  }, [onSuccess, dispatch, password, username]);

  return (
    <DynamicModuleLoader removeAfterUnmout reducers={initialReducers}>
      <div className={classNames(s.loginModal, {}, [])}>
        <Text title={t("authByUsername.FormTitle")} />
        {error && <Text text={t("authByUsername.FormError")} theme={TextTheme.ERROR} />}

        <Input
          onChange={onChangeUsermame}
          value={username}
          autofocus
          type="text"
          placeholder={t("authByUsername.EnterUsername")}
        />
        <Input
          onChange={onChangePassword}
          value={password}
          type="text"
          placeholder={t("authByUsername.EnterPassword")}
        />

        <Button
          className={s.loginBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t("actions.Login")}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
