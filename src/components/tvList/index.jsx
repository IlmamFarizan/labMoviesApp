import React from "react";
import TVCard from "../tvShowCard";
import Grid from "@mui/material/Grid";

const TVList = ({ tvShow, action }) => {
  let tvShows = null;
  if (tvShow) {
    tvShows = tvShow.map((m) => (
      <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
        <TVCard key={m.id} tvShow={m} action={action} />
      </Grid>
    ));
  }
  return tvShows;
};

export default TVList;
