import React from "react";
import ResidentDetail from "./ResidentDetail";

type ResidentsDetailsProps = {
  residentsUrls: string[];
};

const ResidentsDetails = ({ residentsUrls }: ResidentsDetailsProps) => {
  if (!residentsUrls?.length) {
    return <>Nenhum nativo disponível</>;
  }

  return residentsUrls.map((residentUrl) => (
    <ResidentDetail key={residentUrl} residentUrl={residentUrl} />
  ));
};

export default React.memo(ResidentsDetails);
