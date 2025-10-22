import usePlanets from "../hooks/usePlanets";
import type { Planet } from "../types/planet";

const PlanetList = () => {
  const { planets, isLoading, isError, error, isFetching, fetchNextPage } =
    usePlanets();
  return (
    <div>
      {(isLoading || isFetching) && <>Spinner</>}
      {isError && <>{error?.message}</>}
      {planets?.map((planet: Planet) => (
        <div key={planet.name}>{planet.name}</div>
      ))}
    </div>
  );
};

export default PlanetList;
