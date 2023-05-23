import {Route, RouterModule} from "@angular/router";
import {MoviePageComponent} from "./components/movie-page/movie-page.component";
import {SeriesPageComponent} from "./components/series-page/series-page.component";
import {PersonPageComponent} from "./components/person-page/person-page.component";
import {NgModule} from "@angular/core";

let routes: Route[] = [
  { path: "movies", component: MoviePageComponent },
  { path: "series", component: SeriesPageComponent },
  { path: "people", component: PersonPageComponent },
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
