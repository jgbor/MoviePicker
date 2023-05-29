import {Route, RouterModule} from "@angular/router";
import {MovieListPageComponent} from "./components/movie-list-page/movie-list-page.component";
import {SeriesListPageComponent} from "./components/series-list-page/series-list-page.component";
import {PersonListPageComponent} from "./components/person-list-page/person-list-page.component";
import {NgModule} from "@angular/core";
import {MoviePageComponent} from "./components/movie-page/movie-page.component";
import {SeriesPageComponent} from "./components/series-page/series-page.component";
import {PersonPageComponent} from "./components/person-page/person-page.component";

/**
 * Az alkalmazás útvonalait definiáló modul.
 */
let routes: Route[] = [
  { path: "movies", component: MovieListPageComponent },
  { path: "series", component: SeriesListPageComponent },
  { path: "people", component: PersonListPageComponent },
  { path: "movies/:id", component: MoviePageComponent },
  { path: "series/:id", component: SeriesPageComponent },
  { path: "people/:id", component: PersonPageComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
