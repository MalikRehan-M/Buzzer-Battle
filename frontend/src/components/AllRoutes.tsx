import React from "react";
import singleplayer from "../pages/singleplayer";
import { Route, Routes } from "react-router-dom";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/singleplayer" element={<singleplayer />} />
    </Routes>
  );
};

export default AllRoutes;
