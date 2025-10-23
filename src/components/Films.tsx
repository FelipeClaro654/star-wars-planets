import React from "react";
import Film from "./Film";

type FilmsProps = {
  filmsUrls: string[];
};

const Films = ({ filmsUrls }: FilmsProps) => {
  return (
    <div>
      {filmsUrls.map((filmUrl) => (
        <Film key={filmUrl} filmUrl={filmUrl} />
      ))}
    </div>
  );
};

export default React.memo(Films);
