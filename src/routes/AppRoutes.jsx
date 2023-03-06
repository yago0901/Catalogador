import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Fragment } from "react";

import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";

const Private = ({ Item }) => {
  const signed = true;

  return signed > 0 ? <Item /> : <Login />;
};

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="+" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Private Item={Home} />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}
