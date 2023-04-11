import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import { getUpcomingMovies } from '../api/tmdb-api'
import Spinner from '../components/spinner'
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { Icon, IconButton } from "@mui/material";
import AddToPlayListIcon from "../components/cardIcons/addToPlaylistIcon";

const UpcomingMoviesPage = () => {
    const { data, error, isLoading, isError } = useQuery(
      "upcoming",
      getUpcomingMovies
    );
  
    if (isLoading) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }
  
    const movies = data.results;
  
    return (
      <PageTemplate
        title="Upcoming Movies"
        movies={movies}
        action={(movie) => {
          return (
            <AddToPlayListIcon movie={movie} />
          );
        }}
      />
    );
  };

export default UpcomingMoviesPage;
