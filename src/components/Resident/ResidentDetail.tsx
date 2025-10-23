import React from "react";
import useResidentDetails from "../../hooks/useResidentDetails";
import Species from "../Specie/Species";
import Vehicles from "../Vehicle/Vehicles";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { AlertCircleIcon } from "lucide-react";
import { Spinner } from "../ui/spinner";
import { Separator } from "../ui/separator";

type ResidentDetailProps = {
  residentUrl: string;
};

const ResidentDetail = ({ residentUrl }: ResidentDetailProps) => {
  const { data, isLoading, error } = useResidentDetails({ residentUrl });

  if (isLoading) {
    return <Spinner />;
  }

  if (!data) {
    return <></>;
  }

  if (!isLoading && !data) {
    return (
      <Alert>
        <AlertCircleIcon />
        <AlertTitle>There is no information about this resident!</AlertTitle>
      </Alert>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Error!</AlertTitle>
        <AlertDescription>{error?.message}</AlertDescription>
      </Alert>
    );
  }

  return (
    <>
      <div>{data.name}</div>
      <div>{data.hair_color}</div>
      <div>{data.eye_color}</div>
      <div>{data.gender}</div>
      <Species speciesUrls={data.species} />
      <Vehicles vehiclesUrls={data.vehicles} />
    </>
  );
};

export default React.memo(ResidentDetail);
