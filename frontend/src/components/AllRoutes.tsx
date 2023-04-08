import React from "react";
import Singleplayer from "../pages/singleplayer";
import { Route, Routes } from "react-router-dom";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/singleplayer" element={<Singleplayer />} />
    </Routes>
  );
};

export default AllRoutes;
