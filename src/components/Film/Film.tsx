import React from "react";
import useFilm from "../../hooks/useFilm";
import { Spinner } from "../ui/spinner";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { AlertCircleIcon } from "lucide-react";

type FilmProps = {
  filmUrl: string;
};

const Film = ({ filmUrl }: FilmProps) => {
  const { data, isLoading, error } = useFilm({ filmUrl });
  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Error!</AlertTitle>
        <AlertDescription>{error?.message}</AlertDescription>
      </Alert>
    );
  }
  return <div>{data?.title}</div>;
};

export default React.memo(Film);
