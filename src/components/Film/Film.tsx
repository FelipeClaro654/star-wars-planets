import React from "react";
import useFilm from "../../hooks/useFilm";
import { Spinner } from "../ui/spinner";
import InfoAlerts from "../compounds/infoAlerts";
import ErrorAlerts from "../compounds/ErrorAlerts";

type FilmProps = {
  filmUrl: string;
};

const Film = ({ filmUrl }: FilmProps) => {
  const { data, isLoading, error } = useFilm({ filmUrl });
  if (isLoading) {
    return <Spinner />;
  }

  if (!data) {
    return <InfoAlerts message="There is no information about this film!" />;
  }

  if (error) {
    return <ErrorAlerts message={error.message} />;
  }
  return <div>{data?.title}</div>;
};

export default React.memo(Film);
