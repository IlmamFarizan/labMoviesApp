import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import MostPopularMoviesPage from "./pages/mostPopularMoviesPage";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import TopActorsPage from "./pages/topActorsPage";
import TopRatedTVShowsPage from "./pages/topTVShowsPage";
import TVShowDetailsPage from "./pages/tvShowsDetailsPage";





const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
          <MoviesContextProvider>
        <Routes>
        <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
          <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
          <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/reviews/:id" element={<MovieReviewPage/>} />
          <Route path="/movies/popular" element={<MostPopularMoviesPage />} />
          <Route path="/movies/top_rated" element={<TopRatedMoviesPage />} />
          <Route path="/person/popular" element={<TopActorsPage />} />
          <Route path="/tv/top_rated" element={<TopRatedTVShowsPage />} />
          <Route path="/tv/:id" element={<TVShowDetailsPage />} />
        </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
