import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Movie} from "../../models/movie/movie.type";
import {MovieService} from "../../services/movie.service";
import {catchError, Observable} from "rxjs";
import {Title} from "@angular/platform-browser";
import {Credits} from "../../models/movie/credits.type";
import {MatSnackBar} from "@angular/material/snack-bar";

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

  constructor(private route: ActivatedRoute,private movieService: MovieService, private titleService: Title, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      this.getMovie();
      this.getCredits();
    });
    this.movie?.subscribe(movie => this.titleService.setTitle(movie.title));
  }

  getMovie(): void {
    this.movie = this.movieService.getMovie(this.movieId).pipe(
      catchError(err => {
          console.log(err);
          this.openSnackBar("Error occurred while fetching data", "Retry");
          return [];
        }
      ));
    this.movie.subscribe( movie => {
      this.genres = movie.genres ? movie.genres?.map(genre => genre.name).join(', ') : ""
      this.languages = movie.spoken_languages ? movie.spoken_languages?.map(language => language.english_name).join(', ') : ""
    })
  }

  getCredits(): void {
    this.credits = this.movieService.getCredits(this.movieId);
  }

  private openSnackBar(message: string, action: string) {
    let snackbarRef = this.snackbar.open(message, action, {
      verticalPosition: "top",
    });
    snackbarRef.onAction().subscribe(() => {
      this.getMovie();
    });
  }
}
