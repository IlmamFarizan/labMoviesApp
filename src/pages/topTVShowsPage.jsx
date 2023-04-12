import React from "react";
import PageTemplate from "../components/templateTVListPage";
import { useQuery } from "react-query";
import { getTopRatedTVShows } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const TopRatedTVShowsPage = () => {
  const { data, error, isLoading, isError } = useQuery(
    "top-rated-tv-shows",
    getTopRatedTVShows
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const tvShows = data.results;
  console.log(tvShows)

  return (
    <PageTemplate
      title="Top Rated TV Shows"
      tvShow={tvShows}
    />
  );
};

export default TopRatedTVShowsPage;
