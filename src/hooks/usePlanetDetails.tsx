import { useQuery } from "@tanstack/react-query";
import { fetchPlanetDetail } from "../services/planetsService";

const usePlanetDetails = ({ id }: { id?: number }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["planetDetail"],
    queryFn: () => fetchPlanetDetail(id),
  });

  return { data, isLoading, error };
};
export default usePlanetDetails;
