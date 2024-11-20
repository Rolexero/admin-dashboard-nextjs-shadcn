"use client";

import React, { useState } from "react";

import tw from "twin.macro";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import useGetPopularmovies from "@/hooks/useGetPopularMovies";
import InfiniteScroll from "react-infinite-scroll-component";
import { Heart } from "lucide-react";
import Adminsearch from "./admin-search";

const Popularmovies = () => {
  const [isLiked, setIsLiked] = useState(false);

  // const toggleLike = () => {
  //   setIsLiked(!isLiked);
  //   // Optionally, handle any backend updates here, like sending a "liked" request
  // };

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetPopularmovies(searchQuery);

  const movies = data?.pages?.flatMap((page) => page?.data?.results) || [];

  console.log(searchQuery);

  return (
    <div>
      <Card>
        <div className="w-full flex-1">
          <Adminsearch
            searchQuery={searchQuery}
            handleSearchChange={handleSearchChange}
          />
        </div>

        <CardHeader className="px-7">
          <CardTitle>Popular movies</CardTitle>
          <CardDescription>List of popular movies.</CardDescription>
        </CardHeader>
        <CardContent>
          {" "}
          <InfiniteScroll
            dataLength={movies?.length ?? []}
            next={fetchNextPage}
            hasMore={!!hasNextPage}
            loader={<></>}
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {movies?.map((movie: any) => (
                <div key={movie.id} className="p-2 border rounded relative">
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full rounded"
                  />
                  <p className="mt-2 font-semibold">{movie.title}</p>
                  <div
                    className="absolute top-2 right-2 cursor-pointer"
                    // onClick={toggleLike}
                  >
                    <Heart
                      size={24}
                      color={isLiked ? "red" : "gray"}
                      fill={isLiked ? "red" : "none"}
                    />
                  </div>
                </div>
              ))}
            </div>
          </InfiniteScroll>
        </CardContent>
        {isFetchingNextPage && <p>Loading...</p>}
      </Card>
    </div>
  );
};

export default Popularmovies;
