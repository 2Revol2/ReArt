import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app/App";
import { ThemeProvider } from "./app/providers/ThemeProvider";
import "@/shared/config/i18n/i18n";
import "./app/styles/index.scss";
import { ErrorBoundary } from "./app/providers/ErrorBoundary";
import { StoreProvider } from "./app/providers/StoreProvider";

render(
  <ErrorBoundary>
    <BrowserRouter>
      <StoreProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </StoreProvider>
    </BrowserRouter>
  </ErrorBoundary>,
  document.getElementById("root"),
);
