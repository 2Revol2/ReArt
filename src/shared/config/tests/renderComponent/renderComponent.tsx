import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18nForTests from "@/shared/config/i18n/i18nForTests";
import { StoreProvider } from "@/app/providers/StoreProvider";
import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";

interface renderComponentOptions {
  path?: string;
  initialState?: DeepPartial<StateSchema>;
}

export const renderComponent = (children: ReactNode, options: renderComponentOptions = {}) => {
  const { path = "/", initialState } = options;
  return render(
    <MemoryRouter initialEntries={[path]}>
      <StoreProvider initialState={initialState}>
        <I18nextProvider i18n={i18nForTests}>{children}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
};
