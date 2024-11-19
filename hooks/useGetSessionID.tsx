import TMBDService from "@/service/api";
import { useQuery } from "@tanstack/react-query";

function useCreateSessionId(val: boolean) {
  console.log(val);
  const { isLoading, isFetching, data, isError, refetch } = useQuery({
    queryKey: ["create-session", val],
    queryFn: () => TMBDService.createSessionID(),
  });

  return {
    isLoading,
    isFetching,
    data,
    isError,
    refetch,
  };
}

export default useCreateSessionId;
