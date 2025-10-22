import type { Planet } from "../types/planet";

export const sortPlanetNames = (a: Planet, b: Planet) => {
  if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
  if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  return 0;
};
