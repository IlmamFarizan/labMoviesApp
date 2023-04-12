import Typography from "@mui/material/Typography";
import React from "react";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import img from "../../images/film-poster-placeholder.png";



const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

export default function TVCard({ tvShow, action }) {
  const handleActionClick = () => {
    if (typeof action === "function") {
      action(tvShow);
    }
};

  return (
    <Card sx={styles.card}>
        <CardMedia
        sx={styles.media}
        image={
          tvShow.poster_path
            ? `https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {tvShow.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {tvShow.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
      {action && action(tvShow)}
      <Link to={`/tv/${tvShow.id}`}>
        <Button variant="outlined" size="medium" color="primary">
          More Info ...
        </Button>
      </Link>
    </CardActions>
    </Card>
  );
}
