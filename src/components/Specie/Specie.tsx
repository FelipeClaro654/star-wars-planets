import React from "react";
import useSpecie from "../../hooks/useSpecie";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { AlertCircleIcon } from "lucide-react";
import { Spinner } from "../ui/spinner";

type SpecieProps = {
  specieUrl: string;
};

const Specie = ({ specieUrl }: SpecieProps) => {
  const { data, isLoading, error } = useSpecie({ specieUrl });
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
  return <div>{data?.name}</div>;
};

export default React.memo(Specie);
