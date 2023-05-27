import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Observable} from "rxjs";
import {List} from "../../models/list.type";
import {Movie} from "../../models/movie/movie.type";
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-movie',
  templateUrl: './movie-list-page.component.html',
  styleUrls: ['../list-page.component.css']
})
export class MovieListPageComponent implements OnInit {
  selectedValue: string = "trending";
  movies: Observable<List<Movie>> | undefined;
  currentPage: number = 1;
  maxPages: number = 0;

  constructor(private movieService: MovieService, private titleService: Title) { }

  ngOnInit(): void {
    this.getMovies(true);
    this.titleService.setTitle("Movies");
  }

  getMovies(categorySwitched: boolean): void {
    if (categorySwitched) {
      this.currentPage = 1;
    }
    switch(this.selectedValue) {
      case "discover":
        this.movies = this.movieService.getDiscoverMovies(this.currentPage);
        break;
      case "popular":
          this.movies = this.movieService.getPopularMovies(this.currentPage);
        break;
      case "topRated":
          this.movies = this.movieService.getTopRatedMovies(this.currentPage);
        break;
      case "upcoming":
        this.movies = this.movieService.getUpcomingMovies(this.currentPage);
        break;
      case "nowPlaying":
        this.movies = this.movieService.getNowPlayingMovies(this.currentPage);
        break;
      case "trending":
        this.movies = this.movieService.getTrendingMovies(this.currentPage);
        break;
    }
    if(this.movies)
      this.movies.subscribe(movies => {
        this.maxPages = movies.total_pages;
      });
  }
}
