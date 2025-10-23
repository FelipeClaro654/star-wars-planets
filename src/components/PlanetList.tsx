import { Link } from "react-router-dom";
import usePlanets from "../hooks/usePlanets";

import type { Planet } from "../types/planet";
import Films from "./Films";
import { Input } from "./ui/input";
import { Spinner } from "./ui/spinner";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertCircleIcon, EarthIcon } from "lucide-react";

import { Button } from "./ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";

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
    return <Spinner />;
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
        <Card className="w-full max-w" key={planet.name}>
          <CardHeader>
            <CardTitle className="flex items-center gap-1">
              <EarthIcon size="20" /> {planet.name}
            </CardTitle>
            <CardDescription>
              <ul>
                <li>{`Terrain: ${planet.terrain}`}</li>
                <li>{`Diameter: ${planet.diameter}`}</li>
                <li>{`Climate: ${planet.climate}`}</li>
              </ul>
              <Films filmsUrls={planet.films} />
            </CardDescription>
            <CardAction>
              <Button variant="outline" size="sm">
                <Link to={`/planets/${planet.id}`}>Details</Link>
              </Button>
            </CardAction>
          </CardHeader>
        </Card>
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
