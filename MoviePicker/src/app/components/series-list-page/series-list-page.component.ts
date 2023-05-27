import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {List} from "../../models/list.type";
import {Series} from "../../models/series/series.type";
import {SeriesService} from "../../services/series.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-series-page',
  templateUrl: './series-list-page.component.html',
  styleUrls: ['../list-page.component.css']
})
export class SeriesListPageComponent implements OnInit {
  constructor(private seriesService: SeriesService, private titleService: Title) {
  }

  selectedValue: string = "trending";
  seriesList: Observable<List<Series>> | undefined;
  currentPage: number = 1;
  maxPages: number = 0;

  ngOnInit(): void {
    this.getSeries(true);
    this.titleService.setTitle("Series");
  }

  getSeries(categorySwitched: boolean): void {
    if (categorySwitched) {
      this.currentPage = 1;
    }
    switch(this.selectedValue) {
      case "discover":
        this.seriesList = this.seriesService.getDiscoverSeriesList(this.currentPage);
        break;
      case "popular":
        this.seriesList = this.seriesService.getPopularSeriesList(this.currentPage);
        break;
      case "topRated":
        this.seriesList = this.seriesService.getTopRatedSeriesList(this.currentPage);
        break;
      case "airingToday":
        this.seriesList = this.seriesService.getAiringTodaySeriesList(this.currentPage);
        break;
      case "onTheAir":
        this.seriesList = this.seriesService.getOnTheAirSeriesList(this.currentPage);
        break;
      case "trending":
        this.seriesList = this.seriesService.getTrendingSeriesList(this.currentPage);
        break;
    }
    if(this.seriesList)
      this.seriesList.subscribe(seriesList => {
        this.maxPages = seriesList.total_pages;
      });
  }
}
