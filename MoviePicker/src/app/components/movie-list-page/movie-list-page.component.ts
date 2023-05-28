import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {catchError, Observable} from "rxjs";
import {List} from "../../models/list.type";
import {Movie} from "../../models/movie/movie.type";
import {Title} from "@angular/platform-browser";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-movie',
  templateUrl: './movie-list-page.component.html',
  styleUrls: ['../list-page.component.css']
})
export class MovieListPageComponent implements OnInit {
  movies: Observable<List<Movie>> | undefined;
  selectedValue: string = "trending";
  currentPage: number = 1;
  maxPages: number = 0;
  error: boolean = false;

  constructor(private movieService: MovieService, private titleService: Title, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.selectedValue = sessionStorage.getItem('movieSelectedValue') || "trending";
    this.currentPage = parseInt(sessionStorage.getItem('movieCurrentPage') || '1');
    this.maxPages = parseInt(sessionStorage.getItem('movieMaxPages') || '0');
    this.getMovies(false);
    this.titleService.setTitle("Movies");
  }

  getMovies(categorySwitched: boolean): void {
    this.error = false;
    if (categorySwitched) {
      this.currentPage = 1;
    }
    switch(this.selectedValue) {
      case "discover":
        this.movies = this.movieService.getDiscoverMovies(this.currentPage).pipe(
          catchError(err => {
            console.log(err);
            this.error = true;
            this.openSnackBar("Error occurred while fetching data", "Retry");
            return [];
          }));
        break;
      case "popular":
        this.movies = this.movieService.getPopularMovies(this.currentPage).pipe(
          catchError(err => {
            console.log(err);
            this.error = true;
            this.openSnackBar("Error occurred while fetching data", "Retry");
            return [];
          }));
        break;
      case "topRated":
        this.movies = this.movieService.getTopRatedMovies(this.currentPage).pipe(
          catchError(err => {
            console.log(err);
            this.error = true;
            this.openSnackBar("Error occurred while fetching data", "Retry");
            return [];
          }));
        break;
      case "upcoming":
        this.movies = this.movieService.getUpcomingMovies(this.currentPage).pipe(
          catchError(err => {
            console.log(err);
            this.error = true;
            this.openSnackBar("Error occurred while fetching data", "Retry");
            return [];
          }));
        break;
      case "nowPlaying":
        this.movies = this.movieService.getNowPlayingMovies(this.currentPage).pipe(
          catchError(err => {
            console.log(err);
            this.error = true;
            this.openSnackBar("Error occurred while fetching data", "Retry");
            return [];
          }));
        break;
      case "trending":
        this.movies = this.movieService.getTrendingMovies(this.currentPage).pipe(
          catchError(err => {
            console.log(err);
            this.error = true;
            this.openSnackBar("Error occurred while fetching data", "Retry");
            return [];
          }));
        break;
    }
    if(this.movies)
      this.movies.subscribe(movies => {
        this.maxPages = movies.total_pages;
      });
    this.saveToSessionStorage();
  }

  private saveToSessionStorage() {
    sessionStorage.setItem('movieSelectedValue', this.selectedValue);
    sessionStorage.setItem('movieCurrentPage', this.currentPage.toString());
    sessionStorage.setItem('movieMaxPages', this.maxPages.toString());
  }

  private openSnackBar(message: string, action: string) {
    let snackbarRef = this.snackbar.open(message, action, {
      verticalPosition: "top",
    });
    snackbarRef.onAction().subscribe(() => {
      this.getMovies(false);
    });
  }
}
