import { useDispatch, useSelector } from "react-redux";
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

const initialReducers: ReducersList = { loginForm: loginReducer };

const LoginForm = memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

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

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <DynamicModuleLoader removeAfterUnmout reducers={initialReducers}>
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
    </DynamicModuleLoader>
  );
});

export default LoginForm;
