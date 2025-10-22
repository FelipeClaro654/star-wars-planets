import { useQuery } from "@tanstack/react-query";
import { getIdFromUrl } from "../utils/url";
import { fetchVehicleDetail } from "../services/planetsService";

type useVehicleProps = {
  vehicleUrl: string;
};

const useVehicle = ({ vehicleUrl }: useVehicleProps) => {
  const id = getIdFromUrl(vehicleUrl);

  const { data, isLoading, error } = useQuery({
    queryKey: ["vehicle", id],
    queryFn: () => fetchVehicleDetail(Number(id)),
  });

  return { data, isLoading, error };
};

export default useVehicle;
