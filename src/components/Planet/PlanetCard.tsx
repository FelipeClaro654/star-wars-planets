import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { EarthIcon } from "lucide-react";
import Films from "../Film/Films";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import type { Planet } from "@/types/planet";

const PlanetCard = (props: Planet) => {
  return (
    <Card className="w-full max-w" key={props.name}>
      <CardHeader>
        <CardTitle className="flex items-center gap-1">
          <EarthIcon size="20" /> {props.name}
        </CardTitle>
        <CardDescription>
          <ul>
            <li>{`Terrain: ${props.terrain}`}</li>
            <li>{`Diameter: ${props.diameter}`}</li>
            <li>{`Climate: ${props.climate}`}</li>
          </ul>
          <Films filmsUrls={props.films} />
        </CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            <Link to={`/planets/${props.id}`}>Details</Link>
          </Button>
        </CardAction>
      </CardHeader>
    </Card>
  );
};

export default PlanetCard;
