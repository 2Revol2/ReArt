import { ReactNode, useMemo, useState } from "react";
import { ThemeContext } from "@/shared/context/ThemeContext";
import { Theme } from "@/shared/constants/theme";
import { LOCAL_STORAGE_THEME_KEY } from "@/shared/constants/localStorage";

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

export const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultValue = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext.Provider value={defaultValue}>{children}</ThemeContext.Provider>;
};
