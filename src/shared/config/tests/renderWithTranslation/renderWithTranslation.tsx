import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18nForTests from "../../i18n/i18nForTests";

export const renderWithTranslation = (children: ReactNode) => {
  return render(<I18nextProvider i18n={i18nForTests}>{children}</I18nextProvider>);
};
