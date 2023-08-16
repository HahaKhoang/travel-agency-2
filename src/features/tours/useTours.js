import { useQuery } from "@tanstack/react-query";
import { getAllTours } from "../../services/apiTours";
import { useSearchParams } from "react-router-dom";

export function useTours() {
  // const [searchParams] = useSearchParams();

  // // FILTER
  // const filterValue = searchParams.get("type");
  // const filter =
  //   !filter || filterValue === "all"
  //     ? null
  //     : { field: "type", value: filterValue };

  const {
    isLoading,
    data: tours,
    error,
  } = useQuery({
    queryKey: ["tours"],
    queryFn: getAllTours,
  });

  return { isLoading, error, tours };
}
