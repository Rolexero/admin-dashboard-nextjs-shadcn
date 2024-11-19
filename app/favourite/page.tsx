"use client";

import Popularmovies from "@/components/features/Popularmovies";
import { Card, CardTitle } from "@/components/ui/card";
import useGetAccountID from "@/hooks/useGetAccountID";
import useGetFavouriteMovies from "@/hooks/useGetFavouriteMovies";
import React, { useEffect, useState } from "react";

const FavouritePage = () => {
  const [sessionId, setSessionId] = useState<string | null>(null);

  const sessionIdFromStorage = localStorage.getItem("session_id");

  console.log(sessionIdFromStorage);

  const { data: accountData, isFetching: accountFetching } = useGetAccountID();

  const { data, isFetching } = useGetFavouriteMovies(
    sessionIdFromStorage,
    accountData?.data?.id
  );

  console.log(data?.data?.results?.length);

  return (
    <div>
      <div className="font-medium">
        <p>
          {data?.data?.results?.length === 0 ? (
            <Card>
              <CardTitle>No favourite movie found</CardTitle>
            </Card>
          ) : (
            ""
          )}
        </p>
      </div>
    </div>
  );
};

export default FavouritePage;
