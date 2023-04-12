import React from "react";
import Header from "../headerMovieList";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import TVList from "../tvList";

const styles = {
  root: { 
    backgroundColor: "#bfbfbf",
  },
  grid: {
    flexGrow: 1,
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "100%",
  },
  cardContent: {
    flexGrow: 1,
  },
};

function TVListPageTemplate({ tvShow, title, action, actors }) {
  const Box = () => {
    if (tvShow) {
      return (
        <Grid container sx={styles.root}>
          <Grid item xs={12}>
            <Header title={title} />
          </Grid>
          <Grid item container spacing={5}>
            <TVList action={action} tvShow={tvShow} />
          </Grid>
        </Grid>
      );
    } else if (actors) {
      return (
        <>
          <Grid container spacing={4} sx={styles.grid}>
            <Grid item xs={12}>
              <Header title={title} />
            </Grid>
            {actors.map((actor) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={actor.id}>
                <Card sx={styles.card}>
                  {actor.profile_path ? (
                    <CardMedia
                      sx={styles.cardMedia}
                      image={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                      title={actor.name}
                    />
                  ) : (
                    <CardMedia
                      sx={styles.cardMedia}
                      title="No Image Available"
                      component="img"
                      src="https://via.placeholder.com/500x750/FFFFFF/000000?text=No+Image+Available"
                      alt="No Image Available"
                    />
                  )}
                  <CardContent sx={styles.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {actor.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      );
    } else {
      return null;
    }
  };
  return <Box />;
}
export default TVListPageTemplate;
