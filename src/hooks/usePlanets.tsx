import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPlanets } from "../services/planetsService";

const usePlanets = () => {
  const { data, isLoading, isError, error, isFetching, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ["planets"],
      queryFn: ({ pageParam }: { pageParam: number }) => {
        return fetchPlanets(pageParam);
      },
      initialPageParam: 1,
      getNextPageParam: (data) => {
        if (!data.next) {
          return;
        }

        const url = new URL(data?.next);
        const params = new URLSearchParams(url.search);
        return Number(params.get("page"));
      },
      staleTime: 360000,
    });

  const planets = data?.pages?.flatMap((page) => page?.results) || [];
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
