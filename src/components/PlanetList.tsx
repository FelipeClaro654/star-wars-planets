import usePlanets from "../hooks/usePlanets";

import type { Planet } from "../types/planet";

const PlanetList = () => {
  const {
    isError,
    error,
    canShowList,
    planets,
    canGoToNextPage,
    canGoToPreviousPage,
    currentPage,
    showNextPage,
    showPreviousPage,
  } = usePlanets();

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
      <button disabled={!canGoToPreviousPage} onClick={showPreviousPage}>
        Voltar à página anterior
      </button>
      <button disabled={!canGoToNextPage} onClick={showNextPage}>
        Ir para a próxima página
      </button>

      <h4>Página atual: {currentPage}</h4>
    </>
  );
};

export default PlanetList;
