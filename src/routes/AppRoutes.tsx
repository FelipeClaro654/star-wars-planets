import { Routes, Route } from "react-router-dom";
import PlanetList from "../components/PlanetList";
import PlanetDetails from "../components/PlanetDetails";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PlanetList />} />
      <Route path="/planets" element={<PlanetList />} />
      <Route path="/planets/:id" element={<PlanetDetails />} />
    </Routes>
  );
}
