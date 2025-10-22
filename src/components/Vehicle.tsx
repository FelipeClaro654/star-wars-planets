import useVehicle from "../hooks/useVehicle";

type VehicleProps = {
  vehicleUrl: string;
};

const Vehicle = ({ vehicleUrl }: VehicleProps) => {
  const { data, isLoading, error } = useVehicle({ vehicleUrl });

  if (isLoading) {
    return <>Spinner...</>;
  }

  if (error) {
    return <>Não foi possível trazer as informações do veículo</>;
  }

  return (
    <>
      <div>{data?.name}</div>
      <div>{data?.model}</div>
    </>
  );
};

export default Vehicle;
