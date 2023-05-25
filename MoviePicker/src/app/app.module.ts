import {NgModule} from '@angular/core';
import {MoviePickerAppComponent} from './components/app/movie-picker-app.component';
import {MovieListPageComponent} from './components/movie-list-page/movie-list-page.component';
import {PersonListPageComponent} from './components/person-list-page/person-list-page.component';
import {SeriesListPageComponent} from './components/series-list-page/series-list-page.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {MovieService} from "./services/movie.service";
import {PersonService} from "./services/person.service";
import {SeriesService} from "./services/series.service";
import {NavigationbarComponent} from './components/navigationbar/navigationbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTabsModule} from "@angular/material/tabs";
import {AppRoutingModule} from "./app-routing.module";
import {GenreNamesPipe} from './pipes/genre-names.pipe';
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MoviePageComponent} from './components/movie-page/movie-page.component';
import {SeriesPageComponent} from './components/series-page/series-page.component';
import {PersonPageComponent} from './components/person-page/person-page.component';
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  declarations: [
    MoviePickerAppComponent,
    MovieListPageComponent,
    PersonListPageComponent,
    SeriesListPageComponent,
    NavigationbarComponent,
    GenreNamesPipe,
    MoviePageComponent,
    SeriesPageComponent,
    PersonPageComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        MatToolbarModule,
        MatTabsModule,
        MatButtonModule,
        MatButtonToggleModule,
        FormsModule,
        MatCardModule,
        MatIconModule,
        MatGridListModule
    ],
  providers: [
    MovieService,
    PersonService,
    SeriesService
  ],
  bootstrap: [MoviePickerAppComponent]
})
export class AppModule { }
