import { useParams } from "react-router-dom";
import usePlanetDetails from "../hooks/usePlanetDetails";
import ResidentsDetails from "./ResidentsDetails";

const PlanetDetails = () => {
  const { id } = useParams();

  const { data, isLoading, error } = usePlanetDetails({ id: Number(id) });

  if (isLoading) {
    return <>Spinner...</>;
  }

  if (!data) {
    return <></>;
  }

  if (error) {
    return <>{error.message}</>;
  }
  return (
    <div>
      <div>{data.name}</div>
      <div>{data.rotation_period}</div>
      <div>{data.orbital_period}</div>
      <div>{data.diameter}</div>
      <div>{data.climate}</div>
      <div>{data.gravity}</div>
      <div>{data.terrain}</div>
      <div>{data.population}</div>
      <ResidentsDetails
        key={`${data.name}-residents`}
        residentsUrls={data.residents}
      />
    </div>
  );
};

export default PlanetDetails;
