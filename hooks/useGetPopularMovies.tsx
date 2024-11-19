import TMBDService from "@/service/api";
import { useInfiniteQuery } from "@tanstack/react-query";

function useGetPopularmovies(query?: string) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      ["popularMovie"],
      ({ pageParam = 1 }) => TMBDService.getpopularMovies({ pageParam, query }),
      {
        getNextPageParam: (lastPage: any) => {
          return lastPage?.data?.page < lastPage?.data?.total_pages
            ? lastPage?.data?.page + 1
            : undefined;
        },
      }
    );
  return {
    data: data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
}

export default useGetPopularmovies;
