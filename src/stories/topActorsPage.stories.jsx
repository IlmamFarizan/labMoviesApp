import React from "react";
import TopActorsPage from "../pages/topActorsPage";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Top Actors Page/Top Actors List",
  component: TopActorsPage,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <TopActorsPage />;
Basic.storyName = "Default";
