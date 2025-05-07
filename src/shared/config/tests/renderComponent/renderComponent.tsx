import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18nForTests from "@/shared/config/i18n/i18nForTests";

interface renderComponentOptions {
  path?: string;
}

export const renderComponent = (children: ReactNode, options: renderComponentOptions = {}) => {
  const { path = "/" } = options;
  return render(
    <MemoryRouter initialEntries={[path]}>
      <I18nextProvider i18n={i18nForTests}>{children}</I18nextProvider>
    </MemoryRouter>,
  );
};
