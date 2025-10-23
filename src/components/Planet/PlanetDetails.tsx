import { useParams } from "react-router-dom";
import usePlanetDetails from "../../hooks/usePlanetDetails";
import { Spinner } from "../ui/spinner";
import { EarthIcon } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import ErrorAlerts from "../compounds/ErrorAlerts";
import InfoAlerts from "../compounds/infoAlerts";
import PlanetDetail from "./PlanetDetail";
import type { Planet } from "@/types/planet";

const PlanetDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = usePlanetDetails({ id: Number(id) });

  if (isLoading) {
    return (
      <div className="flex justify-center w-full h-screen items-center p-2">
        <Spinner className="size-40" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center w-full h-screen items-center p-2">
        <InfoAlerts message="There is no information about this Planet!" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center w-full h-screen items-center p-2">
        <ErrorAlerts message={error.message} />
      </div>
    );
  }

  const omitedKeys = ["created", "surface_water", "edited", "url", "films"];

  return (
    <Card className="m-2 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-1">
          <EarthIcon size="20" /> {data.name}
        </CardTitle>
        <CardDescription>
          <Separator className="mt-2 mb-2" />
          {Object.keys(data).map((key) => {
            if (omitedKeys.includes(key)) {
              return;
            }
            const propName = key as keyof Planet;
            const propValue = data[key as keyof Planet];
            return (
              <PlanetDetail key={key} planetProp={propName} value={propValue} />
            );
          })}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default PlanetDetails;
