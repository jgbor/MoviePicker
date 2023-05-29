import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Series} from "../models/series/series.type";
import {apiKey} from "../apikey";
import {Observable} from "rxjs";
import {List} from "../models/list.type";
import {Season} from "../models/series/season.type";

/**
 * A SeriesService felelős a TV-sorozat adatok lekérdezéséért a TMDB API fehasználásával.
 */
@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private url: string = "https://api.themoviedb.org/3"

  constructor(private httpClient: HttpClient) {
  }

  /**
   * Adott azonosítójú sorozat lekérdezése.
   * @param id A sorozat azonosítója.
   * @returns Az adott azonosítójú sorozat Observable formában.
   */
  getSeries(id: number): Observable<Series> {
    return this.httpClient.get<Series>(`${this.url}/tv/${id}?api_key=${apiKey}`);
  }

  /**
   * Felfedezni való sorozatok listájának lekérdezése.
   * @param page Az oldalszám.
   * @returns A sorozatok lista Observable formában.
   */
  getDiscoverSeriesList(page: number): Observable<List<Series>> {
    return this.httpClient.get<List<Series>>(`${this.url}/discover/tv?api_key=${apiKey}&page=${page}`);
  }

  /**
   * Népszerű sorozatok listájának lekérdezése.
   * @param page Az oldalszám.
   * @returns A népszerű sorozatok lista Observable formában.
   */
  getPopularSeriesList(page: number): Observable<List<Series>> {
    return this.httpClient.get<List<Series>>(`${this.url}/tv/popular?api_key=${apiKey}&page=${page}`);
  }

  /**
   * Legjobban értékelt sorozatok listájának lekérdezése.
   * @param page Az oldalszám.
   * @returns A legjobban értékelt sorozatok lista Observable formában.
   */
  getTopRatedSeriesList(page: number): Observable<List<Series>> {
    return this.httpClient.get<List<Series>>(`${this.url}/tv/top_rated?api_key=${apiKey}&page=${page}`);
  }

  /**
   * Ma sugárzott sorozatok listájának lekérdezése.
   * @param page Az oldalszám.
   * @returns A ma sugárzott sorozatok lista Observable formában.
   */
  getAiringTodaySeriesList(page: number): Observable<List<Series>> {
    return this.httpClient.get<List<Series>>(`${this.url}/tv/airing_today?api_key=${apiKey}&page=${page}`);
  }

  /**
   * Jelenleg futó sorozatok listájának lekérdezése.
   * @param page Az oldalszám.
   * @returns A jelenleg futó sorozatok lista Observable formában.
   */
  getOnTheAirSeriesList(page: number): Observable<List<Series>> {
    return this.httpClient.get<List<Series>>(`${this.url}/tv/on_the_air?api_key=${apiKey}&page=${page}`);
  }

  /**
   * Felkapott sorozatok listájának lekérdezése.
   * @param page Az oldalszám.
   * @returns A felkapott sorozatok lista Observable formában.
   */
  getTrendingSeriesList(page: number): Observable<List<Series>> {
    return this.httpClient.get<List<Series>>(`${this.url}/trending/tv/day?api_key=${apiKey}&page=${page}`);
  }

  /**
   * Adott sorozat adott szezonjának lekérdezése.
   * @param seriesId A sorozat azonosítója.
   * @param seasonNumber A szezon száma.
   * @returns Az adott sorozat adott szezonja Observable formában.
   */
  getSeason(seriesId: number, seasonNumber: number): Observable<Season> {
    return this.httpClient.get<Season>(`${this.url}/tv/${seriesId}/season/${seasonNumber}?api_key=${apiKey}`);
  }
}
