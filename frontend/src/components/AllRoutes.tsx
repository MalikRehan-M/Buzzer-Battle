
import Singleplayer from "../pages/singleplayer";
import { Route, Routes } from "react-router-dom";
import Multiplayer from "../pages/multiplayer";
import FrontPage from "../pages/frontPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/singleplayer" element={<Singleplayer />} />
      <Route path="/multiplayer" element={<Multiplayer />} />
    </Routes>
  );
};

export default AllRoutes;
