import { Card, CardAction, CardDescription } from "../ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

type PlanetPaginationProps = {
  currentPage: number;
  totalPages: number;
  canGoToPreviousPage: boolean;
  canGoToNextPage: boolean;
  showPreviousPage(): void;
  showNextPage(): void;
  goToPage(page: number): void;
  searchTerm: string;
};

const PlanetPagination = (props: PlanetPaginationProps) => {
  if (props.searchTerm) {
    return <></>;
  }

  return (
    <Card className="w-full max-w">
      <CardDescription>
        <CardAction className="flex gap-2 w-full">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => {
                    if (props.canGoToPreviousPage) {
                      props.showPreviousPage();
                    }
                  }}
                />
              </PaginationItem>
              {Array.from({ length: props.totalPages }).map((_, index) => {
                const pageNumber = index + 1;
                return (
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      isActive={props.currentPage === pageNumber}
                      onClick={() => props.goToPage(pageNumber)}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              <PaginationItem>
                <PaginationNext
                  onClick={() => {
                    if (props.canGoToNextPage) {
                      props.showNextPage();
                    }
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardAction>
      </CardDescription>
    </Card>
  );
};

export default PlanetPagination;
