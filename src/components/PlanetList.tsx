import usePlanets from "../hooks/usePlanets";

import type { Planet } from "../types/planet";

const PlanetList = () => {
  const { isError, error, canShowList, showMorePlanets, planets } =
    usePlanets();

  if (!canShowList) {
    return <>Spinner</>;
  }

  if (isError) {
    return <>{error?.message}</>;
  }

  return (
    <>
      {planets?.map((planet: Planet) => (
        <div style={{ height: "100px" }} key={planet.name}>
          {planet.name}
        </div>
      ))}
      <button onClick={showMorePlanets}>Carregar mais</button>
    </>
  );
};

export default PlanetList;
