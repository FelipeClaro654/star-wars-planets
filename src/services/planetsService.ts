import type { Film } from "../types/film";
import type { Planet } from "../types/planet";
import type { Resident } from "../types/resident";
import type { Specie } from "../types/specie";
import type { Vehicle } from "../types/vehicle";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchPlanets = async (page = 1) => {
  const response = await fetch(`${BASE_URL}/planets?page=${page}&limit=10`);
  if (!response.ok) {
    throw new Error("Erro ao carregar planetas");
  }
  const planets = await response.json();
  return planets;
};

export const fetchPlanetDetail = async (id = 1) => {
  const response = await fetch(`${BASE_URL}/planets/${id}`);
  if (!response.ok) {
    throw new Error("Erro ao carregar detalhe do planeta");
  }
  const planet: Planet = await response.json();
  return planet;
};

export const fetchResidentDetail = async (id = 1) => {
  const response = await fetch(`${BASE_URL}/people/${id}`);
  if (!response.ok) {
    throw new Error("Erro ao carregar detalhe de nativo do planeta");
  }
  const resident: Resident = await response.json();
  return resident;
};

export const fetchSpecieDetail = async (id = 1) => {
  const response = await fetch(`${BASE_URL}/species/${id}`);
  if (!response.ok) {
    throw new Error("Erro ao carregar detalhe da espécie");
  }
  const specie: Specie = await response.json();
  return specie;
};

export const fetchVehicleDetail = async (id = 1) => {
  const response = await fetch(`${BASE_URL}/vehicles/${id}`);
  if (!response.ok) {
    throw new Error("Erro ao carregar detalhe do veículo");
  }
  const vehicle: Vehicle = await response.json();
  return vehicle;
};

export const fetchFilmDetail = async (id = 1) => {
  const response = await fetch(`${BASE_URL}/films/${id}`);
  if (!response.ok) {
    throw new Error("Erro ao carregar detalhe do filme");
  }
  const film: Film = await response.json();
  return film;
};
