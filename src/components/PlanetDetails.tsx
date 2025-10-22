import { useParams } from "react-router-dom";
import usePlanetDetails from "../hooks/usePlanetDetails";
import ResidentsDetails from "./ResidentsDetails";

const PlanetDetails = () => {
  const { id } = useParams();

  const { data, isLoading, error } = usePlanetDetails({ id: Number(id) });

  if (isLoading) {
    return <>Spinner...</>;
  }

  if (error) {
    <>{error.message}</>;
  }

  return (
    <div>
      {Object.keys(data).map((key) => {
        if (key === "residents") {
          return (
            <ResidentsDetails
              key={`${data.name}-residents`}
              residentsUrls={data[key]}
            />
          );
        }
        const keyInfo = `${key}: ${data[key]}`;
        return <div key={keyInfo}>{keyInfo}</div>;
      })}
    </div>
  );
};

export default PlanetDetails;
