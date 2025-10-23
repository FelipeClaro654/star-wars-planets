import usePlanets from "../../hooks/usePlanets";

import type { Planet } from "../../types/planet";

import { Input } from "../ui/input";
import { Spinner } from "../ui/spinner";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { AlertCircleIcon } from "lucide-react";

import PlanetCard from "./PlanetCard";
import PlanetPagination from "./PlanetPagination";

const PlanetList = () => {
  const {
    isError,
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

  if (isError) {
    return (
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Error!</AlertTitle>
        <AlertDescription>{error?.message}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="flex flex-col gap-1.5 m-1.5 w-full md:w-2xl">
      <Input
        type="text"
        placeholder="Search by name"
        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
          const searchTerm = e.currentTarget.value;
          setSearchTerm(searchTerm);
        }}
      />
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
