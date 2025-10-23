import React from "react";
import Specie from "./Specie";
import { Separator } from "../ui/separator";
import { Label } from "../ui/label";

type SpeciesProps = {
  speciesUrls: string[];
};

const Species = ({ speciesUrls }: SpeciesProps) => {
  const hasNoSpecies = !speciesUrls.length;
  return (
    <div>
      <Separator className="mt-2 mb-2" />
      <Label className="font-bold">Species:</Label>
      {hasNoSpecies && "-"}
      {speciesUrls.map((specieUrl) => (
        <Specie key={specieUrl} specieUrl={specieUrl} />
      ))}
    </div>
  );
};

export default React.memo(Species);
