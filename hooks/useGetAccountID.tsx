import TMBDService from "@/service/api";
import { useQuery } from "@tanstack/react-query";

function useGetAccountID(sessionId?: string) {
  const { isLoading, isFetching, data, isError, refetch } = useQuery({
    queryKey: ["account_id"],
    queryFn: () => TMBDService.getAccountID(sessionId),
  });

  return {
    isLoading,
    isFetching,
    data,
    isError,
    refetch,
  };
}

export default useGetAccountID;
