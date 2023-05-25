import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {Series} from "../../models/series.type";
import {Observable} from "rxjs";
import {SeriesService} from "../../services/series.service";

@Component({
  selector: 'app-series-page',
  templateUrl: './series-page.component.html',
  styleUrls: ['./series-page.component.css']
})
export class SeriesPageComponent implements OnInit{
  seriesId: number = 0;
  series: Observable<Series> | undefined;
  seasons: Observable<Series[]> | undefined;
  genres: string = "";
  languages: string = "";

  constructor(private route: ActivatedRoute,private seriesService: SeriesService,private titleService: Title) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.seriesId = params['id'];
      this.getSeries();
      this.getSeasons();
    });
    this.series?.subscribe(series => this.titleService.setTitle(series.name));
  }

  private getSeries() {
    this.series = this.seriesService.getSeries(this.seriesId);
    this.series.subscribe( series => {
      this.genres = series.genres ? series.genres?.map(genre => genre.name).join(', ') : ""
      this.languages = series.spoken_languages ? series.spoken_languages?.map(language => language.english_name).join(', ') : ""
    })
  }

  private getSeasons() {

  }
}
