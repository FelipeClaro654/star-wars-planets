import React from "react";
import useVehicle from "../../hooks/useVehicle";
import { Spinner } from "../ui/spinner";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { AlertCircleIcon } from "lucide-react";

type VehicleProps = {
  vehicleUrl: string;
};

const Vehicle = ({ vehicleUrl }: VehicleProps) => {
  const { data, isLoading, error } = useVehicle({ vehicleUrl });

  if (isLoading) {
    return <Spinner />;
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
      <div>{data?.name}</div>
      <div>{data?.model}</div>
    </>
  );
};

export default React.memo(Vehicle);
