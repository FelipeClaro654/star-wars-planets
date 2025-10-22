import { useQuery } from "@tanstack/react-query";
import { getIdFromUrl } from "../utils/url";
import { fetchFilmDetail } from "../services/planetsService";

type useFilmProps = {
  filmUrl: string;
};

const useFilm = ({ filmUrl }: useFilmProps) => {
  const id = getIdFromUrl(filmUrl);

  const { data, isLoading, error } = useQuery({
    queryKey: ["film", id],
    queryFn: () => fetchFilmDetail(Number(id)),
  });

  return { data, isLoading, error };
};

export default useFilm;
