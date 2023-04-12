import React from "react";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getTVImages, getTVShow } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import TVCard from "../tvShowCard";

const styles = {
  gridListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    width: 450,
    height: '100vh',
  },
};

const TemplateTVPage = ({ tvShow, children }) => {
//     const { data , error, isLoading, isError } = useQuery(
//         ["images", { id: tvShow.id }],
//         getTVImages,
//       );

//   if (isLoading) {
//     return <Spinner />;
//   }

//   if (isError) {
//     return <h1>{error.message}</h1>;
//   }

//   console.log("asd", tvShow);

  return (
    <>
      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div sx={styles.gridListRoot}>
            <ImageList cols={1}>
                <ImageListItem
                  sx={styles.gridListTile}
                  cols={1}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
                    alt={tvShow.poster_path}
                  />
                </ImageListItem>
            </ImageList>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateTVPage;
