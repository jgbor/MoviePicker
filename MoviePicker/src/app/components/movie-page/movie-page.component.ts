import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Movie} from "../../models/movie.type";
import {MovieService} from "../../services/movie.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  movieId: number = 0;
  movie: Observable<Movie> | undefined;

  constructor(private route: ActivatedRoute,private movieService: MovieService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      this.movie = this.movieService.getMovie(this.movieId);
    });
  }
}
