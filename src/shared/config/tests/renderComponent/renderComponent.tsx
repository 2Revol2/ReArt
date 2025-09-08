import { render } from "@testing-library/react";
import { ReducersMapObject } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18nForTests from "../../i18n/i18nForTests";
import { StoreProvider } from "@/app/providers/StoreProvider";
import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";

interface renderComponentOptions {
  path?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const renderComponent = (children: ReactNode, options: renderComponentOptions = {}) => {
  const { path = "/", initialState, asyncReducers } = options;
  return render(
    <MemoryRouter initialEntries={[path]}>
      <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
        <I18nextProvider i18n={i18nForTests}>{children}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
};
