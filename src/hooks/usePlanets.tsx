import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPlanets } from "../services/planetsService";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { Planet } from "../types/planet";
import { sortPlanetNames } from "../utils/sort";

const usePlanets = () => {
  const [page, setPage] = useState(1);
  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
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

  useEffect(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, fetchNextPage, isFetchingNextPage]);

  const filteredPlanets = useMemo(() => {
    if (hasNextPage || isLoading) return [];

    return (
      (data?.pages
        ?.flatMap((page) => page?.results)
        .sort(sortPlanetNames)
        .slice(0, page * 10) as Planet[]) || []
    );
  }, [data, hasNextPage, isLoading, page]);

  const showMorePlanets = useCallback(() => {
    setPage((actualPage) => actualPage + 1);
  }, []);

  const canShowList = !isLoading && !isFetching && !hasNextPage;

  return {
    planets: filteredPlanets,
    isError,
    error,
    hasNextPage,
    showMorePlanets,
    canShowList,
  };
};

export default usePlanets;
