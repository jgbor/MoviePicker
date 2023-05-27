import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {Series} from "../../models/series/series.type";
import {catchError, Observable} from "rxjs";
import {SeriesService} from "../../services/series.service";
import {Season} from "../../models/series/season.type";
import {MatSnackBar} from "@angular/material/snack-bar";

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

  constructor(private route: ActivatedRoute,private seriesService: SeriesService,private titleService: Title, private snackbar: MatSnackBar) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.seriesId = params['id'];
      this.getSeries();
    });
    this.series?.subscribe(series => this.titleService.setTitle(series.name));
  }

  private getSeries() {
    this.series = this.seriesService.getSeries(this.seriesId).pipe(
      catchError(err => {
          console.log(err);
          this.openSnackBar("Error occurred while fetching data", "Retry");
          return [];
        }
      ));
    this.series.subscribe( series => {
      this.genres = series.genres ? series.genres?.map(genre => genre.name).join(', ') : ""
      this.languages = series.spoken_languages ? series.spoken_languages?.map(language => language.english_name).join(', ') : ""
    })
    this.getSeasons();
  }

  private getSeasons() {
    this.series?.subscribe(
      series => {
        for (let i= 0; i< (series?.number_of_seasons ? series?.number_of_seasons : 0); i++) {
          this.seasons[i] = this.seriesService.getSeason(series.id, i+1);
        }
      }
    )
  }
  private openSnackBar(message: string, action: string) {
    let snackbarRef = this.snackbar.open(message, action, {
      verticalPosition: "top",
    });
    snackbarRef.onAction().subscribe(() => {
      this.getSeries();
    });
  }
}
