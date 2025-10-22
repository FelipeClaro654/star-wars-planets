const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchPlanets = async (page = 1) => {
  const response = await fetch(`${BASE_URL}/planets?page=${page}&limit=10`);
  if (!response.ok) throw new Error("Erro ao carregar planetas");
  return response.json();
};
