import { Link } from "react-router-dom";
import usePlanets from "../hooks/usePlanets";

import type { Planet } from "../types/planet";
import Films from "./Films";

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
    setSearchTerm,
  } = usePlanets();

  if (!canShowList) {
    return <>Spinner</>;
  }

  if (isError) {
    return <>{error?.message}</>;
  }

  return (
    <>
      <input
        type="text"
        placeholder="Buscar Nome"
        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
          const searchTerm = e.currentTarget.value;
          setSearchTerm(searchTerm);
        }}
      />
      {planets?.map((planet: Planet) => (
        <div style={{ height: "100px" }} key={planet.name}>
          <Link to={`/planets/${planet.id}`}>{planet.name}</Link>
          <div>{planet.terrain}</div>
          <div>{planet.diameter}</div>
          <div>{planet.climate}</div>
          <Films filmsUrls={planet.films} />
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
