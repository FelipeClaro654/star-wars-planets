import React from "react";
import Vehicle from "./Vehicle";
import { Separator } from "../ui/separator";
import { Label } from "../ui/label";

type VehiclesProps = {
  vehiclesUrls: string[];
};

const Vehicles = ({ vehiclesUrls }: VehiclesProps) => {
  const hasNoVehicle = !vehiclesUrls.length;

  return (
    <div>
      <Separator className="mt-2 mb-2" />
      <Label className="font-bold">Vehicles:</Label>
      {hasNoVehicle && "-"}
      {vehiclesUrls.map((vehicleUrl) => (
        <Vehicle key={vehicleUrl} vehicleUrl={vehicleUrl} />
      ))}
    </div>
  );
};

export default React.memo(Vehicles);
