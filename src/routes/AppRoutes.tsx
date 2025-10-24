import { Routes, Route } from "react-router-dom";
import PlanetList from "../components/Planet/PlanetList";
import PlanetDetails from "../components/Planet/PlanetDetails";
import PageWrapper from "@/components/compounds/PageWrapper";
import usePlanets from "@/hooks/usePlanets";
import PlanetListHeader from "@/components/Planet/PlanetListHeader";

export function AppRoutes() {
  const planetsData = usePlanets();

  return (
    <div className="flex flex-col gap-1.5 w-full p-2.5">
      <PlanetListHeader
        setSearchTerm={planetsData.setSearchTerm}
        goToPage={planetsData.goToPage}
        searchTerm={planetsData.searchTerm}
      />

      <Routes>
        <Route
          path="/"
          element={
            <PageWrapper>
              <PlanetList planetsData={planetsData} />
            </PageWrapper>
          }
        />
        <Route
          path="/planets"
          element={
            <PageWrapper>
              <PlanetList planetsData={planetsData} />
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
    </div>
  );
}
