import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPlanets } from "../services/planetsService";

const usePlanets = () => {
  const { data, isLoading, isError, error, isFetching, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ["planets"],
      queryFn: ({ pageParam }: { pageParam: number }) =>
        fetchPlanets(pageParam),
      initialPageParam: 1,
      getNextPageParam: (data) => {
        return data.next;
      },
      staleTime: 360000,
    });

  const planets = data?.pages ? data.pages[0].results : [];
  return {
    planets,
    isLoading,
    isError,
    error,
    isFetching,
    fetchNextPage,
  };
};

export default usePlanets;
