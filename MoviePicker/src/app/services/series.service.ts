import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Series} from "../models/series/series.type";
import {apiKey} from "../apikey";
import {Observable} from "rxjs";
import {List} from "../models/list.type";
import {Season} from "../models/series/season.type";

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private url: string = "https://api.themoviedb.org/3"
  constructor(private httpClient: HttpClient) { }

  getSeries(id: number): Observable<Series> {
    return this.httpClient.get<Series>(`${this.url}/tv/${id}?api_key=${apiKey}`);
  }

  getDiscoverSeriesList(page: number): Observable<List<Series>> {
    return this.httpClient.get<List<Series>>(`${this.url}/discover/tv?api_key=${apiKey}&page=${page}`);
  }

  getPopularSeriesList(page: number): Observable<List<Series>> {
    return this.httpClient.get<List<Series>>(`${this.url}/tv/popular?api_key=${apiKey}&page=${page}`);
  }

  getTopRatedSeriesList(page: number) : Observable<List<Series>>{
    return this.httpClient.get<List<Series>>(`${this.url}/tv/top_rated?api_key=${apiKey}&page=${page}`);
  }

  getAiringTodaySeriesList(page: number) : Observable<List<Series>>{
    return this.httpClient.get<List<Series>>(`${this.url}/tv/airing_today?api_key=${apiKey}&page=${page}`);
  }

  getOnTheAirSeriesList(page: number) : Observable<List<Series>>{
    return this.httpClient.get<List<Series>>(`${this.url}/tv/on_the_air?api_key=${apiKey}&page=${page}`);
  }

  getSeason(seriesId: number, seasonNumber: number): Observable<Season> {
    return this.httpClient.get<Season>(`${this.url}/tv/${seriesId}/season/${seasonNumber}?api_key=${apiKey}`);
  }
}
