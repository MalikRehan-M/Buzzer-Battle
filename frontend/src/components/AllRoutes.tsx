
import Singleplayer from "../pages/singleplayer";
import { Route, Routes } from "react-router-dom";
import Multiplayer from "../pages/multiplayer";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/singleplayer" element={<Singleplayer />} />
      <Route path="/multiplayer" element={<Multiplayer/>} />
    </Routes>
  );
};

export default AllRoutes;
