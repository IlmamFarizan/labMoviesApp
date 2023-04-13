import React from "react";
import MovieList from "../components/movieList";
import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import MoviesContextProvider from "../contexts/moviesContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddToPlayListIcon from "../components/cardIcons/addToPlaylistIcon";

export default {
  title: "Upcoming Movies Page/Upcoming Movies List",
  component: MovieList,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>
    ),
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
                <AddToPlayListIcon color="primary" fontSize="large" />
            </>
            }
        />
    </Grid>
  );
};
Basic.storyName = "Default";
