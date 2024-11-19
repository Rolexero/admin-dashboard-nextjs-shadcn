import TMBDService from "@/service/api";
import { useQuery } from "@tanstack/react-query";

function useGetFavouriteMovies(
  sessionId?: string | null,
  accountId?: string | null
) {
  const { isLoading, isFetching, data, isError, refetch } = useQuery({
    queryKey: ["favoriteMovies", accountId],
    queryFn: () => TMBDService.getFavouriteMovies({ accountId, sessionId }),
    enabled: !!accountId, // Only fetch if sessionId is available
  });

  return {
    isLoading,
    isFetching,
    data,
    isError,
    refetch,
  };
}

export default useGetFavouriteMovies;
