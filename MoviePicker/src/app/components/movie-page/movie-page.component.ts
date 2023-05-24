import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Observable} from "rxjs";
import {List} from "../../models/list.type";
import {Movie} from "../../models/movie.type";


@Component({
  selector: 'app-movie',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  selectedValue: string = "discover";
  movies: Observable<List<Movie>> | undefined;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    switch(this.selectedValue) {
      case "discover":
        this.movies = this.movieService.getDiscoverMovies();
        break;
      case "popular":
          this.movies = this.movieService.getPopularMovies();
        break;
      case "topRated":
          this.movies = this.movieService.getTopRatedMovies();
        break;
      case "upcoming":
        this.movies = this.movieService.getUpcomingMovies();
        break;
      case "nowPlaying":
        this.movies = this.movieService.getNowPlayingMovies();
        break;
    }
  }
}
