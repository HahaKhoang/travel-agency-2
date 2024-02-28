import { useQuery } from "@tanstack/react-query";
import { getAllInspiration } from "../../services/apiTours";

export function useInspiration() {
  const {
    isLoading,
    data: inspiration,
    error,
  } = useQuery({
    queryKey: ["inspiration"],
    queryFn: getAllInspiration,
  });

  return { isLoading, error, inspiration };
}
