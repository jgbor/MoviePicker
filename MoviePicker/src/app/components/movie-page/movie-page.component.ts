import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Movie} from "../../models/movie/movie.type";
import {MovieService} from "../../services/movie.service";
import {Observable} from "rxjs";
import {Title} from "@angular/platform-browser";
import {Credits} from "../../models/movie/credits.type";

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  movieId: number = 0;
  movie: Observable<Movie> | undefined;
  credits: Observable<Credits> | undefined;
  genres: string = "";
  languages: string = "";

  constructor(private route: ActivatedRoute,private movieService: MovieService,private titleService: Title) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      this.getMovie();
      this.getCredits();
    });
    this.movie?.subscribe(movie => this.titleService.setTitle(movie.title));
  }

  getMovie(): void {
    this.movie = this.movieService.getMovie(this.movieId);
    this.movie.subscribe( movie => {
      this.genres = movie.genres ? movie.genres?.map(genre => genre.name).join(', ') : ""
      this.languages = movie.spoken_languages ? movie.spoken_languages?.map(language => language.english_name).join(', ') : ""
    })
  }

  getCredits(): void {
    this.credits = this.movieService.getCredits(this.movieId);
  }
}
