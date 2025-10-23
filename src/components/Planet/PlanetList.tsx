import usePlanets from "../../hooks/usePlanets";
import { Input } from "../ui/input";
import { Spinner } from "../ui/spinner";
import PlanetCard from "./PlanetCard";
import PlanetPagination from "./PlanetPagination";
import InfoAlerts from "../compounds/infoAlerts";

import type { Planet } from "../../types/planet";
import PlanetListHeader from "./PlanetListHeader";

const PlanetList = () => {
  const {
    error,
    canShowList,
    planets,
    setSearchTerm,
    canGoToNextPage,
    canGoToPreviousPage,
    currentPage,
    showNextPage,
    showPreviousPage,
    totalPages,
    goToPage,
    searchTerm,
  } = usePlanets();

  if (!canShowList) {
    return (
      <div className="flex justify-center w-full h-screen items-center">
        <Spinner className="size-40" />
      </div>
    );
  }

  if (error) {
    return <InfoAlerts message={error?.message} />;
  }

  return (
    <div className="flex flex-col gap-1.5 m-1.5 w-full md:w-2xl">
      <PlanetListHeader setSearchTerm={setSearchTerm} goToPage={goToPage} />
      {planets?.map((planet: Planet) => (
        <PlanetCard key={planet.id} {...planet} />
      ))}

      <PlanetPagination
        goToPage={goToPage}
        canGoToNextPage={canGoToNextPage}
        canGoToPreviousPage={canGoToPreviousPage}
        currentPage={currentPage}
        showNextPage={showNextPage}
        showPreviousPage={showPreviousPage}
        totalPages={totalPages}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default PlanetList;
