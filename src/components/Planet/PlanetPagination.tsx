import { Button } from "../ui/button";
import { Card, CardAction, CardDescription } from "../ui/card";
import { Label } from "../ui/label";

type PlanetPaginationProps = {
  currentPage: number;
  totalPages: number;
  canGoToPreviousPage: boolean;
  canGoToNextPage: boolean;
  showPreviousPage(): void;
  showNextPage(): void;
};

const PlanetPagination = (props: PlanetPaginationProps) => {
  return (
    <Card className="w-full max-w pr-3">
      <CardDescription>
        <CardAction className="flex gap-2">
          <Label>
            Current page: {props.currentPage} / {props.totalPages}
          </Label>
          <Button
            disabled={!props.canGoToPreviousPage}
            onClick={props.showPreviousPage}
          >
            Back Page
          </Button>
          <Button
            disabled={!props.canGoToNextPage}
            onClick={props.showNextPage}
          >
            Next Page
          </Button>
        </CardAction>
      </CardDescription>
    </Card>
  );
};

export default PlanetPagination;
