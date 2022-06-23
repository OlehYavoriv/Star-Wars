import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routesConfig from "@routes/routesConfig";
import styles from "./App.module.scss";
import Header from "@components/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className={styles.wrapper}>
          <Routes>
            {routesConfig.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.component()}
              />
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
