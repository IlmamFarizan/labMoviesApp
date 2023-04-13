import React from "react";
import { MemoryRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "react-query";
import TopRatedTVShowsPage from "../pages/topTVShowsPage";

export default {
  title: "Top TV Shows Page/Top Rated TV Shows",
  component: TopRatedTVShowsPage,
  decorators: [
    (Story) => (
      <QueryClientProvider client={new QueryClient()}>
        <MemoryRouter initialEntries={["/"]}>
          <Story />
        </MemoryRouter>
      </QueryClientProvider>
    ),
  ],
};

export const Basic = () => <TopRatedTVShowsPage />;

Basic.storyName = "Default";
