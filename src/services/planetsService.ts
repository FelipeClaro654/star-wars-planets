const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchPlanets = async (page = 1) => {
  const response = await fetch(`${BASE_URL}/planets?page=${page}&limit=10`);
  if (!response.ok) throw new Error("Erro ao carregar planetas");
  return response.json();
};

export const fetchPlanetDetail = async (id = 1) => {
  const response = await fetch(`${BASE_URL}/planets/${id}`);
  if (!response.ok) throw new Error("Erro ao carregar detalhe do planeta");
  return response.json();
};

export const fetchResidentDetail = async (id = 1) => {
  const response = await fetch(`${BASE_URL}/people/${id}`);
  if (!response.ok)
    throw new Error("Erro ao carregar detalhe de nativo do planeta");
  return response.json();
};
