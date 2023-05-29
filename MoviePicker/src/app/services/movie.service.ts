import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Movie} from '../models/movie/movie.type';
import {HttpClient} from "@angular/common/http";
import {apiKey} from "../apikey";
import {Credits} from "../models/movie/credits.type";
import {List} from "../models/list.type";

/**
 * A film szolgáltatás felelős a filmadatok lekérdezéséért a TMDB API felhasználásával.
 */
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url: string = "https://api.themoviedb.org/3"

  constructor(private httpClient: HttpClient) { }

  /**
   * Adott azonosítójú film lekérdezése.
   * @param id A film azonosítója.
   * @returns Az adott azonosítójú film Observable formában.
   */
  getMovie(id: number): Observable<Movie> {
    return this.httpClient.get<Movie>(`${this.url}/movie/${id}?api_key=${apiKey}`);
  }

  /**
   * Felfedezni való listák lekérdezése filmekhez.
   * @param page Az oldalszám.
   * @returns A filmek lista Observable formában.
   */
  getDiscoverMovies(page: number): Observable<List<Movie>> {
    return this.httpClient.get<List<Movie>>(`${this.url}/discover/movie?api_key=${apiKey}&page=${page}`);
  }

  /**
   * Népszerű filmek listájának lekérdezése.
   * @param page Az oldalszám.
   * @returns A népszerű filmek lista Observable formában.
   */
  getPopularMovies(page: number): Observable<List<Movie>> {
    return this.httpClient.get<List<Movie>>(`${this.url}/movie/popular?api_key=${apiKey}&page=${page}`);
  }

  /**
   * Legjobban értékelt filmek listájának lekérdezése.
   * @param page Az oldalszám.
   * @returns A legjobban értékelt filmek lista Observable formában.
   */
  getTopRatedMovies(page: number): Observable<List<Movie>> {
    return this.httpClient.get<List<Movie>>(`${this.url}/movie/top_rated?api_key=${apiKey}&page=${page}`);
  }

  /**
   * Hamarosan érkező filmek listájának lekérdezése.
   * @param page Az oldalszám.
   * @returns A hamarosan érkező filmek lista Observable formában.
   */
  getUpcomingMovies(page: number): Observable<List<Movie>> {
    return this.httpClient.get<List<Movie>>(`${this.url}/movie/upcoming?api_key=${apiKey}&page=${page}`);
  }

  /**
   * Jelenleg játszott filmek listájának lekérdezése.
   * @param page Az oldalszám.
   * @returns A jelenleg játszott filmek lista Observable formában.
   */
  getNowPlayingMovies(page: number): Observable<List<Movie>> {
    return this.httpClient.get<List<Movie>>(`${this.url}/movie/now_playing?api_key=${apiKey}&page=${page}`);
  }

  /**
   * Felkapott filmek listájának lekérdezése.
   * @param page Az oldalszám.
   * @returns A felkapott filmek lista Observable formában.
   */
  getTrendingMovies(page: number): Observable<List<Movie>> {
    return this.httpClient.get<List<Movie>>(`${this.url}/trending/movie/day?api_key=${apiKey}&page=${page}`);
  }

  /**
   * Adott azonosítójú film stáblistájának lekérdezése.
   * @param id A film azonosítója.
   * @returns Az adott azonosítójú film stáblista Observable formában.
   */
  getCredits(id: number): Observable<Credits> {
    return this.httpClient.get<Credits>(`${this.url}/movie/${id}/credits?api_key=${apiKey}`);
  }
}
