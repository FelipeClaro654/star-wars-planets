import usePlanets from "../hooks/usePlanets";

import type { Planet } from "../types/planet";

import { Input } from "./ui/input";
import { Spinner } from "./ui/spinner";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertCircleIcon } from "lucide-react";

import { Button } from "./ui/button";
import { Card, CardAction, CardDescription } from "./ui/card";
import { Label } from "./ui/label";
import PlanetCard from "./PlanetCard";

const PlanetList = () => {
  const {
    isError,
    error,
    canShowList,
    planets,
    canGoToNextPage,
    canGoToPreviousPage,
    currentPage,
    showNextPage,
    showPreviousPage,
    setSearchTerm,
    totalPages,
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
    <div className="flex flex-col gap-1.5 m-1.5">
      <Input
        type="text"
        placeholder="Search by name"
        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
          const searchTerm = e.currentTarget.value;
          setSearchTerm(searchTerm);
        }}
      />
      {planets?.map((planet: Planet) => (
        <PlanetCard {...planet} />
      ))}

      <Card className="w-full max-w pr-3">
        <CardDescription>
          <CardAction className="flex gap-2">
            <Label>
              Current page: {currentPage} / {totalPages}
            </Label>
            <Button disabled={!canGoToPreviousPage} onClick={showPreviousPage}>
              Back Page
            </Button>
            <Button disabled={!canGoToNextPage} onClick={showNextPage}>
              Next Page
            </Button>
          </CardAction>
        </CardDescription>
      </Card>
    </div>
  );
};

export default PlanetList;
