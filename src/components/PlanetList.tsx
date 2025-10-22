import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import usePlanets from "../hooks/usePlanets";

import type { Planet } from "../types/planet";

const PlanetList = () => {
  const { planets, isLoading, isError, error, isFetching, fetchNextPage } =
    usePlanets();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);
  return (
    <div>
      {(isLoading || isFetching) && <>Spinner</>}
      {isError && <>{error?.message}</>}
      {planets?.map((planet: Planet) => (
        <div style={{ height: "100px" }} key={planet.name}>
          {planet.name}
        </div>
      ))}
      <div ref={ref}></div>
    </div>
  );
};

export default PlanetList;
