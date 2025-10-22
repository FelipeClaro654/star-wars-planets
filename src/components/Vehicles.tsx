import Vehicle from "./Vehicle";

type VehiclesProps = {
  vehiclesUrls: string[];
};

const Vehicles = ({ vehiclesUrls }: VehiclesProps) => {
  return (
    <div>
      {vehiclesUrls.map((vehicleUrl) => (
        <Vehicle vehicleUrl={vehicleUrl} />
      ))}
    </div>
  );
};

export default Vehicles;
