import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import PlanetList from "./PlanetList";
import usePlanets from "../../hooks/usePlanets";
import type { Planet } from "../../types/planet";

vi.mock("../../hooks/usePlanets");
vi.mock("../ui/spinner", () => ({
  Spinner: () => <div data-testid="spinner">Loading...</div>,
}));
vi.mock("./PlanetCard", () => ({
  default: (props: Planet) => (
    <div data-testid={`planet-${props.id}`}>{props.name}</div>
  ),
}));
vi.mock("./PlanetPagination", () => ({
  default: ({
    currentPage,
    totalPages,
    searchTerm,
  }: {
    currentPage: number;
    totalPages: number;
    searchTerm: string;
  }) => (
    <div data-testid="pagination">
      Pagination: {currentPage}/{totalPages} - Search: {searchTerm}
    </div>
  ),
}));
vi.mock("./PlanetListHeader", () => ({
  default: ({
    setSearchTerm,
    goToPage,
    searchTerm,
  }: {
    setSearchTerm: (term: string) => void;
    goToPage: (page: number) => void;
    searchTerm: string;
  }) => (
    <input
      data-testid="search-input"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") goToPage(1);
      }}
    />
  ),
}));
vi.mock("../compounds/ErrorAlerts", () => ({
  default: ({ message }: { message: string }) => (
    <div data-testid="error-alert">{message}</div>
  ),
}));
vi.mock("../compounds/infoAlerts", () => ({
  default: ({ message }: { message: string }) => (
    <div data-testid="info-alert">{message}</div>
  ),
}));

const mockUsePlanets = vi.mocked(usePlanets);

describe("PlanetList", () => {
  const defaultPlanets: Planet[] = [
    {
      id: 1,
      name: "Tatooine",
      climate: "",
      diameter: "",
      gravity: "",
      orbital_period: "",
      population: "",
      residents: [],
      rotation_period: "",
      terrain: "",
      films: [],
    },
    {
      id: 2,
      name: "Alderaan",
      climate: "",
      diameter: "",
      gravity: "",
      orbital_period: "",
      population: "",
      residents: [],
      rotation_period: "",
      terrain: "",
      films: [],
    },
  ];

  const mockPlanetHook = {
    error: null,
    canShowList: true,
    planets: defaultPlanets,
    setSearchTerm: vi.fn(),
    canGoToNextPage: true,
    canGoToPreviousPage: false,
    currentPage: 1,
    showNextPage: vi.fn(),
    showPreviousPage: vi.fn(),
    totalPages: 5,
    goToPage: vi.fn(),
    searchTerm: "",
  } as unknown as any;

  beforeEach(() => {
    vi.clearAllMocks();
    mockUsePlanets.mockReturnValue(mockPlanetHook);
  });

  it("should render loading spinner when canShowList is false", () => {
    mockUsePlanets.mockReturnValue({
      ...mockPlanetHook,
      canShowList: false,
    });

    render(<PlanetList />);

    expect(screen.getByTestId("spinner")).toBeInTheDocument();
    expect(screen.queryByTestId("planet-1")).not.toBeInTheDocument();
  });

  it("should render error alert when there is an error", () => {
    const errorMessage = "Failed to fetch planets";
    mockUsePlanets.mockReturnValue({
      ...mockPlanetHook,
      error: { message: errorMessage } as Error,
    });

    render(<PlanetList />);

    expect(screen.getByTestId("error-alert")).toHaveTextContent(errorMessage);
    expect(screen.queryByTestId("spinner")).not.toBeInTheDocument();
  });

  it("should render planet cards when planets are available", () => {
    render(<PlanetList />);

    expect(screen.getByTestId("planet-1")).toHaveTextContent("Tatooine");
    expect(screen.getByTestId("planet-2")).toHaveTextContent("Alderaan");
    expect(screen.queryByTestId("info-alert")).not.toBeInTheDocument();
  });

  it("should render info alert when no planets are found", () => {
    mockUsePlanets.mockReturnValue({
      ...mockPlanetHook,
      planets: [],
    });

    render(<PlanetList />);

    expect(screen.getByTestId("info-alert")).toHaveTextContent(
      "There are no planets with this name!"
    );
    expect(screen.queryByTestId("planet-1")).not.toBeInTheDocument();
  });

  it("should render search input and pagination", () => {
    render(<PlanetList />);

    expect(screen.getByTestId("search-input")).toBeInTheDocument();
    expect(screen.getByTestId("pagination")).toBeInTheDocument();
  });

  it("should pass correct props to PlanetListHeader", () => {
    const searchTerm = "test";
    mockUsePlanets.mockReturnValue({
      ...mockPlanetHook,
      searchTerm,
    });

    render(<PlanetList />);

    const searchInput = screen.getByTestId("search-input") as HTMLInputElement;
    expect(searchInput.value).toBe(searchTerm);
  });

  it("should pass correct props to PlanetPagination", () => {
    const searchTerm = "alderaan";
    const currentPage = 2;
    const totalPages = 10;

    mockUsePlanets.mockReturnValue({
      ...mockPlanetHook,
      searchTerm,
      currentPage,
      totalPages,
    });

    render(<PlanetList />);

    const pagination = screen.getByTestId("pagination");
    expect(pagination).toHaveTextContent(
      `Pagination: ${currentPage}/${totalPages} - Search: ${searchTerm}`
    );
  });

  it("should handle search input changes", () => {
    render(<PlanetList />);

    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "new search" } });

    expect(mockPlanetHook.setSearchTerm).toHaveBeenCalledWith("new search");
  });

  it("should handle enter key press in search input", () => {
    render(<PlanetList />);

    const searchInput = screen.getByTestId("search-input");
    fireEvent.keyDown(searchInput, { key: "Enter" });

    expect(mockPlanetHook.goToPage).toHaveBeenCalledWith(1);
  });
});
