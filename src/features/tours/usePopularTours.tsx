import { useQuery } from "@tanstack/react-query";
import { getPopularTours } from "../../services/apiTours";

export function usePopularTours() {
  const {
    isLoading,
    data: popularTours,
    error,
  } = useQuery({
    queryKey: ["popularTours"],
    queryFn: getPopularTours,
  });

  return { isLoading, error, popularTours };
}
