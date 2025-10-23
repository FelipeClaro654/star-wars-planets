import { Routes, Route } from "react-router-dom";
import PlanetList from "../components/Planet/PlanetList";
import PlanetDetails from "../components/Planet/PlanetDetails";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PlanetList />} />
      <Route path="/planets" element={<PlanetList />} />
      <Route path="/planets/:id" element={<PlanetDetails />} />
    </Routes>
  );
}
