import { useQuery } from "@tanstack/react-query";
import { getIdFromUrl } from "../utils/url";
import { fetchSpecieDetail } from "../services/planetsService";

type useSpecieProps = {
  specieUrl: string;
};

const useSpecie = ({ specieUrl }: useSpecieProps) => {
  const id = getIdFromUrl(specieUrl);

  const { data, isLoading, error } = useQuery({
    queryKey: ["specie", id],
    queryFn: () => fetchSpecieDetail(Number(id)),
  });

  return { data, isLoading, error };
};

export default useSpecie;
