import { Routes, Route } from "react-router-dom";
import PlanetList from "../components/Planet/PlanetList";
import PlanetDetails from "../components/Planet/PlanetDetails";
import PageWrapper from "@/components/compounds/PageWrapper";

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PageWrapper>
            <PlanetList />
          </PageWrapper>
        }
      />
      <Route
        path="/planets"
        element={
          <PageWrapper>
            <PlanetList />
          </PageWrapper>
        }
      />
      <Route
        path="/planets/:id"
        element={
          <PageWrapper>
            <PlanetDetails />
          </PageWrapper>
        }
      />
    </Routes>
  );
}
