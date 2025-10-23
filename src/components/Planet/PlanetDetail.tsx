import { Label } from "../ui/label";
import ResidentsDetails from "../Resident/ResidentsDetails";
import type { Planet } from "@/types/planet";

type PlanetDetail = {
  planetProp: keyof Planet;
  value: string | number | string[] | undefined;
};

const PlanetDetail = (props: PlanetDetail) => {
  if (props.planetProp === "residents" && Array.isArray(props.value)) {
    return (
      <ResidentsDetails
        key={`${props.planetProp}-residents`}
        residentsUrls={props.value}
      />
    );
  }

  return (
    <div className="flex gap-2">
      <Label>{props.planetProp}:</Label>
      {props.value}
    </div>
  );
};

export default PlanetDetail;
