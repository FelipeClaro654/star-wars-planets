import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import PlanetDetails from "./PlanetDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

vi.mock("@/hooks/usePlanets");

describe("<PlanetDetails>", () => {
  it("should render a spinner on loading", () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <PlanetDetails />
      </QueryClientProvider>
    );
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });
});
