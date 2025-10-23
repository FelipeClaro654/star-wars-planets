import { useParams } from "react-router-dom";
import usePlanetDetails from "../hooks/usePlanetDetails";
import ResidentsDetails from "./ResidentsDetails";
import type { Planet } from "../types/planet";

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
      {Object.keys(data).map((key) => {
        if (key === "residents") {
          return (
            <ResidentsDetails
              key={`${data.name}-residents`}
              residentsUrls={data[key]}
            />
          );
        }
        const value = data[key as keyof Planet];
        const keyInfo = `${key}: ${value}`;
        return <div key={keyInfo}>{keyInfo}</div>;
      })}
    </div>
  );
};

export default PlanetDetails;
