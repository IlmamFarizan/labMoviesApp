import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import IconButton from "@mui/material/IconButton";
import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";

const AddToPlayListIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const onUserSelect = (e) => {
    e.preventDefault();
    context.addToMustWatch(movie);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={onUserSelect}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToPlayListIcon;