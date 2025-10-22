import useResidentDetails from "../hooks/useResidentDetails";
import Species from "./Species";
import Vehicles from "./Vehicles";

type ResidentDetailProps = {
  residentUrl: string;
};

const ResidentDetail = ({ residentUrl }: ResidentDetailProps) => {
  const { data, isLoading, error } = useResidentDetails({ residentUrl });

  if (isLoading) {
    return <>Spinner</>;
  }

  if (!data) {
    return <></>;
  }

  if (!isLoading && !data) {
    return <>Nenhuma informação sobre o nativo está disponível</>;
  }

  if (error) {
    return <>Error ao trazer informação sobre nativo</>;
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

export default ResidentDetail;
