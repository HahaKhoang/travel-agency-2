import { useQuery } from "@tanstack/react-query";
import { getTour } from "../../services/apiTours";
import { useParams } from "react-router-dom";

export function useSingleTour() {
  const { slug } = useParams();
  console.log(slug);
  const {
    isLoading,
    data: tour,
    error,
  } = useQuery({
    queryKey: ["tour", slug],
    queryFn: () => getTour(slug),
    retry: false,
  });

  return { isLoading, error, tour };
}
