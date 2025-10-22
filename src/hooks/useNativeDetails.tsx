import { useQuery } from "@tanstack/react-query";
import { fetchResidentDetail } from "../services/planetsService";
import { getIdFromUrl } from "../utils/url";

type useResidentDetailsProps = {
  residentUrl: string;
};

const useResidentDetails = ({ residentUrl }: useResidentDetailsProps) => {
  const id = getIdFromUrl(residentUrl);

  const { data, isLoading, error } = useQuery({
    queryKey: ["residentDetail"],
    queryFn: () => fetchResidentDetail(Number(id)),
  });

  return { data, isLoading, error };
};

export default useResidentDetails;
