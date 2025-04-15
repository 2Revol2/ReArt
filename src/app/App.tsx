import "./styles/index.scss";
import { Link, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "../shared/lib/classNames/classNames";
import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage"; 

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О нас</Link>
      <button onClick={toggleTheme}>toogle</button>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
