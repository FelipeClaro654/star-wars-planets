import { Spinner } from "../ui/spinner";
import PlanetCard from "./PlanetCard";
import PlanetPagination from "./PlanetPagination";
import ErrorAlerts from "../compounds/ErrorAlerts";
import InfoAlerts from "../compounds/infoAlerts";
import type { Planet } from "../../types/planet";

const PlanetList = ({ planetsData }: any) => {
  if (!planetsData.canShowList) {
    return (
      <div className="flex justify-center w-full h-screen items-center">
        <Spinner className="size-40" />
      </div>
    );
  }

  if (planetsData.error) {
    return <ErrorAlerts message={planetsData.error?.message} />;
  }

  const renderPlanets = () =>
    planetsData.planets?.map((planet: Planet) => (
      <PlanetCard
        data-testid={`planet-${planet.id}`}
        key={planet.id}
        {...planet}
      />
    ));

  return (
    <>
      {planetsData.planets?.length ? (
        renderPlanets()
      ) : (
        <InfoAlerts message="There are no planets with this name!" />
      )}

      <PlanetPagination
        goToPage={planetsData.goToPage}
        canGoToNextPage={planetsData.canGoToNextPage}
        canGoToPreviousPage={planetsData.canGoToPreviousPage}
        currentPage={planetsData.currentPage}
        showNextPage={planetsData.showNextPage}
        showPreviousPage={planetsData.showPreviousPage}
        totalPages={planetsData.totalPages}
        searchTerm={planetsData.searchTerm}
      />
    </>
  );
};

export default PlanetList;
