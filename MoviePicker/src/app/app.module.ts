import { NgModule } from '@angular/core';
import { MoviePickerAppComponent } from './components/app/movie-picker-app.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { PersonPageComponent } from './components/person-page/person-page.component';
import { SeriesPageComponent } from './components/series-page/series-page.component';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {MovieService} from "./services/movie.service";
import {PersonService} from "./services/person.service";
import {SeriesService} from "./services/series.service";
import { NavigationbarComponent } from './components/navigationbar/navigationbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTabsModule} from "@angular/material/tabs";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    MoviePickerAppComponent,
    MoviePageComponent,
    PersonPageComponent,
    SeriesPageComponent,
    NavigationbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatTabsModule,
  ],
  providers: [
    MovieService,
    PersonService,
    SeriesService
  ],
  bootstrap: [MoviePickerAppComponent]
})
export class AppModule { }
