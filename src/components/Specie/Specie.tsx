import React from "react";
import useSpecie from "../../hooks/useSpecie";
import { Spinner } from "../ui/spinner";
import InfoAlerts from "../compounds/infoAlerts";
import ErrorAlerts from "../compounds/ErrorAlerts";

type SpecieProps = {
  specieUrl: string;
};

const Specie = ({ specieUrl }: SpecieProps) => {
  const { data, isLoading, error } = useSpecie({ specieUrl });
  if (isLoading) {
    return <Spinner />;
  }

  if (!data) {
    return <InfoAlerts message="There is no information about this specie!" />;
  }

  if (error) {
    return <ErrorAlerts message={error.message} />;
  }
  return <div>{data?.name}</div>;
};

export default React.memo(Specie);
