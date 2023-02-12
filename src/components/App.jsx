// import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "components/modules/Navbar/Navbar";

import UserRoutes from "components/UserRoutes";

export const App = () => {

  return (
    <BrowserRouter>
      <Navbar />

      <UserRoutes />
    </BrowserRouter>
  );
};
