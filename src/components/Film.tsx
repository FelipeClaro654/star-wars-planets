import React from "react";
import useFilm from "../hooks/useFilm";

type FilmProps = {
  filmUrl: string;
};

const Film = ({ filmUrl }: FilmProps) => {
  const { data, isLoading, error } = useFilm({ filmUrl });
  if (isLoading) {
    return <>Spinner...</>;
  }

  if (error) {
    return <>Não foi possível trazer as informações do filme</>;
  }
  return <div>{data?.title}</div>;
};

export default React.memo(Film);
