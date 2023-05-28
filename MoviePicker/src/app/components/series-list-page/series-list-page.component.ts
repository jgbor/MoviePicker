import {Component, OnInit} from '@angular/core';
import {catchError, Observable} from "rxjs";
import {List} from "../../models/list.type";
import {Series} from "../../models/series/series.type";
import {SeriesService} from "../../services/series.service";
import {Title} from "@angular/platform-browser";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-series-page',
  templateUrl: './series-list-page.component.html',
  styleUrls: ['../list-page.component.css']
})
export class SeriesListPageComponent implements OnInit {
  constructor(private seriesService: SeriesService, private titleService: Title, private snackbar: MatSnackBar) {
  }

  selectedValue: string = "trending";
  seriesList: Observable<List<Series>> | undefined;
  currentPage: number = 1;
  maxPages: number = 0;
  error: boolean = false;

  ngOnInit(): void {
    this.selectedValue = sessionStorage.getItem('seriesSelectedValue') || "trending";
    this.currentPage = parseInt(sessionStorage.getItem('seriesCurrentPage') || '1');
    this.maxPages = parseInt(sessionStorage.getItem('seriesMaxPages') || '0');
    this.getSeries(false);
    this.titleService.setTitle("Series");
  }

  getSeries(categorySwitched: boolean): void {
    this.error= false;
    if (categorySwitched) {
      this.currentPage = 1;
    }
    switch(this.selectedValue) {
      case "discover":
        this.seriesList = this.seriesService.getDiscoverSeriesList(this.currentPage).pipe(
          catchError(err => {
            console.log(err);
            this.error= true;
            this.openSnackBar("Error occurred while fetching data", "Retry");
            return [];
          }));
        break;
      case "popular":
        this.seriesList = this.seriesService.getPopularSeriesList(this.currentPage).pipe(
          catchError(err => {
            console.log(err);
            this.error=true;
            this.openSnackBar("Error occurred while fetching data", "Retry");
            return [];
          }));
        break;
      case "topRated":
        this.seriesList = this.seriesService.getTopRatedSeriesList(this.currentPage).pipe(
          catchError(err => {
            console.log(err);
            this.error=true;
            this.openSnackBar("Error occurred while fetching data", "Retry");
            return [];
          }));
        break;
      case "airingToday":
        this.seriesList = this.seriesService.getAiringTodaySeriesList(this.currentPage).pipe(
          catchError(err => {
            console.log(err);
            this.error=true;
            this.openSnackBar("Error occurred while fetching data", "Retry");
            return [];
          }));
        break;
      case "onTheAir":
        this.seriesList = this.seriesService.getOnTheAirSeriesList(this.currentPage).pipe(
          catchError(err => {
            console.log(err);
            this.error=true;
            this.openSnackBar("Error occurred while fetching data", "Retry");
            return [];
          }));
        break;
      case "trending":
        this.seriesList = this.seriesService.getTrendingSeriesList(this.currentPage).pipe(
          catchError(err => {
            console.log(err);
            this.error=true;
            this.openSnackBar("Error occurred while fetching data", "Retry");
            return [];
          }));
        break;
    }
    if(this.seriesList)
      this.seriesList.subscribe(seriesList => {
        this.maxPages = seriesList.total_pages;
      });
    this.saveToSessionStorage()
  }

  private saveToSessionStorage() {
    sessionStorage.setItem('seriesSelectedValue', this.selectedValue);
    sessionStorage.setItem('seriesCurrentPage', this.currentPage.toString());
    sessionStorage.setItem('seriesMaxPages', this.maxPages.toString());
  }

  private openSnackBar(message: string, action: string) {
    let snackbarRef = this.snackbar.open(message, action, {
      verticalPosition: "top",
    });
    snackbarRef.onAction().subscribe(() => {
      this.getSeries(false);
    });
  }
}
