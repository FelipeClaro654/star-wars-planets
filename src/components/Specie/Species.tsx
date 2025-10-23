import React from "react";
import Specie from "./Specie";

type SpeciesProps = {
  speciesUrls: string[];
};

const Species = ({ speciesUrls }: SpeciesProps) => {
  return (
    <div>
      {speciesUrls.map((specieUrl) => (
        <Specie key={specieUrl} specieUrl={specieUrl} />
      ))}
    </div>
  );
};

export default React.memo(Species);
