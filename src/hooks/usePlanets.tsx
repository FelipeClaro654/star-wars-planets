import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPlanets } from "../services/planetsService";
import { useCallback, useEffect, useMemo, useState } from "react";
import { sortPlanetNames } from "../utils/sort";

const usePlanets = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

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

  const allResults = useMemo(() => {
    if (hasNextPage) {
      return [];
    }
    const flatResult = data?.pages?.flatMap((page) => page?.results);

    const mappedResult = flatResult?.map((planet, index) => {
      return { ...planet, id: index + 1 };
    });

    return mappedResult;
  }, [data?.pages, hasNextPage]);

  const totalResults = useMemo(() => allResults?.length, [allResults]);

  const totalPages = useMemo(() => {
    if (totalResults) {
      return Math.ceil(totalResults / 10);
    }
    return 0;
  }, [totalResults]);

  const filteredPlanets = useMemo(() => {
    if (hasNextPage || isLoading) return [];
    const startItem = (page - 1) * 10 + 1;
    const endItem = Math.min(page * 10, Number(totalResults));
    const planetsInPage = allResults
      ?.sort(sortPlanetNames)
      .slice(startItem, endItem);
    const planetsFilteredBySearchName = planetsInPage?.filter((planet) =>
      planet.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return planetsFilteredBySearchName || [];
  }, [hasNextPage, isLoading, page, allResults, totalResults, searchTerm]);

  const showNextPage = useCallback(() => {
    setPage((actualPage) => actualPage + 1);
  }, []);

  const showPreviousPage = useCallback(() => {
    setPage((actualPage) => actualPage - 1);
  }, []);

  const canShowList = !isLoading && !isFetching && !hasNextPage;
  const canGoToNextPage = page < totalPages;
  const canGoToPreviousPage = page > 1;

  return {
    planets: filteredPlanets,
    currentPage: page,
    isError,
    error,
    hasNextPage,
    canShowList,
    showNextPage,
    showPreviousPage,
    canGoToNextPage,
    canGoToPreviousPage,
    setSearchTerm,
  };
};

export default usePlanets;
