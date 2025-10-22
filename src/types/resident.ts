import type { Specie } from "./specie";
import type { Vehicle } from "./vehicle";

export type Resident = {
  name: string;
  hair_color: string;
  eye_color: string;
  gender: string;
  species: Specie[];
  vehicles: Vehicle[];
};
