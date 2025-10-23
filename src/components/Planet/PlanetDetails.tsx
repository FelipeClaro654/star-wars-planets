import { useParams } from "react-router-dom";
import usePlanetDetails from "../../hooks/usePlanetDetails";
import ResidentsDetails from "../Resident/ResidentsDetails";
import { Spinner } from "../ui/spinner";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { AlertCircleIcon, EarthIcon } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";

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
        <Alert>
          <AlertCircleIcon />
          <AlertTitle>There is no information about this Planet!</AlertTitle>
        </Alert>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center w-full h-screen items-center p-2">
        <Alert variant="destructive">
          <AlertCircleIcon />
          <AlertTitle>Error!</AlertTitle>
          <AlertDescription>{error?.message}</AlertDescription>
        </Alert>
      </div>
    );
  }
  return (
    <Card className="m-2 h-screen">
      <CardHeader>
        <CardTitle className="flex items-center gap-1">
          <EarthIcon size="20" /> {data.name}
        </CardTitle>
        <CardDescription>
          <Separator className="mt-2 mb-2" />
          <div className="flex gap-2">
            <Label>Rotation Period:</Label>
            {data.rotation_period}
          </div>
          <div className="flex gap-2">
            <Label>Rotation Period:</Label>
            {data.orbital_period}
          </div>
          <div className="flex gap-2">
            <Label>Diameter:</Label>
            {data.diameter}
          </div>
          <div className="flex gap-2">
            <Label>Climate:</Label>
            {data.climate}
          </div>
          <div className="flex gap-2">
            <Label>Gravity:</Label>
            {data.gravity}
          </div>
          <div className="flex gap-2">
            <Label>Terrain:</Label>
            {data.gravity}
          </div>
          <div className="flex gap-2">
            <Label>Population:</Label>
            {data.population}
          </div>
          <ResidentsDetails
            key={`${data.name}-residents`}
            residentsUrls={data.residents}
          />
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default PlanetDetails;
