import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {Series} from "../../models/series/series.type";
import {catchError, Observable} from "rxjs";
import {SeriesService} from "../../services/series.service";
import {Season} from "../../models/series/season.type";
import {MatSnackBar} from "@angular/material/snack-bar";

/**
 * Egy sorozat adatainak oldala.
 */
@Component({
  selector: 'app-series-page',
  templateUrl: './series-page.component.html',
  styleUrls: ['./series-page.component.css']
})
export class SeriesPageComponent implements OnInit{
  seriesId: number = 0;
  series: Observable<Series> | undefined;
  seasons: Observable<Season>[] =  [];
  genres: string = "";
  languages: string = "";
  error: boolean = false;

  /**
   * Konstruktor.
   *
   * @param route - Az ActivatedRoute példány, a navigációs útvonal paramétereinek lekéréséhez.
   * @param seriesService - A SeriesService példány, a sorozatadatok lekéréséhez.
   * @param titleService - A Title példány, az oldal címének beállításához.
   * @param snackbar - A MatSnackBar példány, a Snackbar üzenetek megjelenítéséhez.
   */
  constructor(private route: ActivatedRoute,private seriesService: SeriesService,private titleService: Title, private snackbar: MatSnackBar) { }

  /**
   * Az OnInit interfész metódusa.
   * Inicializálja a komponenst.
   */
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.seriesId = params['id'];
      this.getSeries();
    });
    this.series?.subscribe(series => this.titleService.setTitle(series.name));
  }

  /**
   * A sorozat lekérése a megadott azonosító alapján.
   * Hiba esetén megjelenít egy Snackbar üzenetet és újrapróbálkozást kínál.
   */
  private getSeries() {
    this.error = false;
    this.series = this.seriesService.getSeries(this.seriesId).pipe(
      catchError(err => {
        console.log(err);
        this.error=true;
        this.openSnackBar("Error occurred while fetching data", "Retry");
        return [];
      }));
    this.series.subscribe( series => {
      this.genres = series.genres ? series.genres?.map(genre => genre.name).join(', ') : ""
      this.languages = series.spoken_languages ? series.spoken_languages?.map(language => language.english_name).join(', ') : ""
    })
    this.getSeasons();
  }

  /**
   * A sorozat évadainak lekérése a megadott azonosító alapján.
   * Hiba esetén megjelenít egy Snackbar üzenetet és újrapróbálkozást kínál.
   */
  private getSeasons() {
    this.series?.subscribe(
      series => {
        for (let i= 0; i< (series?.number_of_seasons ? series?.number_of_seasons : 0); i++) {
          this.seasons[i] = this.seriesService.getSeason(series.id, i+1).pipe(
            catchError(err => {
              console.log(err);
              this.error=true;
              this.openSnackBar("Error occurred while fetching data", "Retry");
              return [];
            }));
        }
      }
    )
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
      this.getSeries();
    });
  }
}
