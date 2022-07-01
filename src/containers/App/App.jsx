import React from "react";
import { Route, Routes } from "react-router-dom";
import routesConfig from "@routes/routesConfig";
import styles from "./App.module.scss";
import Header from "@components/Header";

const App = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Routes>
          {routesConfig.map((route, index) => (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </div>
    </>
  );
};

export default App;
