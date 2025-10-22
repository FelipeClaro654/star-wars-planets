import useResidentDetails from "../hooks/useNativeDetails";

type ResidentDetailProps = {
  residentUrl: string;
};

const ResidentDetail = ({ residentUrl }: ResidentDetailProps) => {
  const { data } = useResidentDetails({ residentUrl });
  return <>{data?.name}</>;
};

export default ResidentDetail;
