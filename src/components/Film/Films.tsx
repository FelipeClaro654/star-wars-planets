import React from "react";
import Film from "./Film";
import { Separator } from "../ui/separator";
import { Label } from "../ui/label";

type FilmsProps = {
  filmsUrls: string[];
};

const Films = ({ filmsUrls }: FilmsProps) => {
  const hasNoFilms = !filmsUrls.length;
  return (
    <div>
      <Separator className="mt-2 mb-2" />
      <Label className="font-bold">Films:</Label>
      {hasNoFilms && "-"}
      {filmsUrls.map((filmUrl) => (
        <Film key={filmUrl} filmUrl={filmUrl} />
      ))}
    </div>
  );
};

export default React.memo(Films);
