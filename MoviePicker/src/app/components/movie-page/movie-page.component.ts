import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Movie} from "../../models/movie/movie.type";
import {MovieService} from "../../services/movie.service";
import {catchError, Observable} from "rxjs";
import {Title} from "@angular/platform-browser";
import {Credits} from "../../models/movie/credits.type";
import {MatSnackBar} from "@angular/material/snack-bar";

/**
 * Egy film adatainak oldala.
 */
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
  error: boolean = false;

  /**
   * Konstruktor.
   *
   * @param route - Az ActivatedRoute példány, a navigációs útvonal paramétereinek lekéréséhez.
   * @param movieService - A MovieService példány, a filmadatok lekéréséhez.
   * @param titleService - A Title példány, az oldal címének beállításához.
   * @param snackbar - A MatSnackBar példány, a Snackbar üzenetek megjelenítéséhez.
   */
  constructor(private route: ActivatedRoute,private movieService: MovieService, private titleService: Title, private snackbar: MatSnackBar) { }

  /**
   * Az OnInit interfész metódusa.
   * Inicializálja a komponenst.
   */
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      this.getMovie();
    });
    this.movie?.subscribe(movie => this.titleService.setTitle(movie.title));
  }

  /**
   * A film lekérése a megadott azonosító alapján.
   * Hiba esetén megjelenít egy Snackbar üzenetet és újrapróbálkozást kínál.
   */
  getMovie(): void {
    this.error = false;
    this.movie = this.movieService.getMovie(this.movieId).pipe(
      catchError(err => {
        console.log(err);
        this.error = true;
        this.openSnackBar("Error occurred while fetching data", "Retry");
        return [];
      }));
    this.getCredits();
    this.movie.subscribe( movie => {
      this.genres = movie.genres ? movie.genres?.map(genre => genre.name).join(', ') : ""
      this.languages = movie.spoken_languages ? movie.spoken_languages?.map(language => language.english_name).join(', ') : ""
    })
  }

  /**
   * A film stábadatainak lekérése a megadott azonosító alapján.
   * Hiba esetén megjelenít egy Snackbar üzenetet és újrapróbálkozást kínál.
   */
  getCredits(): void {
    this.credits = this.movieService.getCredits(this.movieId).pipe(
      catchError(err => {
        console.log(err);
        this.error = true;
        this.openSnackBar("Error occurred while fetching data", "Retry");
        return [];
      }));
  }

  /**
   * Snackbar megnyitása hibaüzenettel és újrapróbálkozással.
   * @param message Az üzenet szövege.
   * @param action Az gomb szövege.
   */
  private openSnackBar(message: string, action: string) {
    let snackbarRef = this.snackbar.open(message, action, {
      verticalPosition: "top",
    });
    snackbarRef.onAction().subscribe(() => {
      this.getMovie();
    });
  }
}
