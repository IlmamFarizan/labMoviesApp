import React from "react";
import MovieList from "../components/movieList";
import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";
import MoviesContextProvider from "../contexts/moviesContext";
import RateReviewIcon from "@mui/icons-material/RateReview";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default {
  title: "Favourites Page/Favourites List",
  component: MovieList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  const movies = [
    { ...SampleMovie, id: 1 },
    { ...SampleMovie, id: 2 },
    { ...SampleMovie, id: 3 },
    { ...SampleMovie, id: 4 },
    { ...SampleMovie, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
        <MovieList
            movies={movies}
            action={(movie) => 
            <>
                <DeleteIcon color="primary" fontSize="large" />
                <RateReviewIcon color="primary" fontSize="large" />
            </>
            }
        />
    </Grid>
  );
};

Basic.storyName = "Default";
