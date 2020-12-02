import { Switch, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "../Pages/HomePage/HomePage";
import { MoviePage } from "../Pages/MoviePage/MoviePage";
import React from "react";
export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/movie/:id">
          <MoviePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
