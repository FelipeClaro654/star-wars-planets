import React from "react";
import useResidentDetails from "../../hooks/useResidentDetails";
import Species from "../Specie/Species";
import Vehicles from "../Vehicle/Vehicles";
import { Spinner } from "../ui/spinner";
import { Label } from "../ui/label";
import { Card, CardContent } from "../ui/card";
import InfoAlerts from "../compounds/infoAlerts";
import ErrorAlerts from "../compounds/ErrorAlerts";

type ResidentDetailProps = {
  residentUrl: string;
};

const ResidentDetail = ({ residentUrl }: ResidentDetailProps) => {
  const { data, isLoading, error } = useResidentDetails({ residentUrl });

  if (isLoading) {
    return <Spinner />;
  }

  if (!data) {
    return (
      <InfoAlerts message="There is no information about this resident!" />
    );
  }

  if (error) {
    return <ErrorAlerts message={error.message} />;
  }

  return (
    <Card>
      <CardContent>
        <Label className="font-bold">{data.name}</Label>
        <div className="mt-1.5">
          <div>{`Hair color: ${data.hair_color}`}</div>
          <div>{`Eye color: ${data.eye_color}`}</div>
          <div>{`Gender: ${data.gender}`}</div>
        </div>
        <Species speciesUrls={data.species} />
        <Vehicles vehiclesUrls={data.vehicles} />
      </CardContent>
    </Card>
  );
};

export default React.memo(ResidentDetail);
