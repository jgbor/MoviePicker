import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Movie} from '../models/movie/movie.type';
import {HttpClient} from "@angular/common/http";
import {apiKey} from "../apikey";
import {Credits} from "../models/movie/credits.type";
import {List} from "../models/list.type";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url: string = "https://api.themoviedb.org/3"
  constructor(private httpClient: HttpClient) { }

  getMovie(id: number): Observable<Movie> {
    return this.httpClient.get<Movie>(`${this.url}/movie/${id}?api_key=${apiKey}`);
  }

  getDiscoverMovies(page: number): Observable<List<Movie>> {
    return this.httpClient.get<List<Movie>>(`${this.url}/discover/movie?api_key=${apiKey}&page=${page}`);
  }

  getPopularMovies(page: number): Observable<List<Movie>> {
    return this.httpClient.get<List<Movie>>(`${this.url}/movie/popular?api_key=${apiKey}&page=${page}`);
  }

  getTopRatedMovies(page: number): Observable<List<Movie>> {
    return this.httpClient.get<List<Movie>>(`${this.url}/movie/top_rated?api_key=${apiKey}&page=${page}`);
  }

  getUpcomingMovies(page: number): Observable<List<Movie>> {
    return this.httpClient.get<List<Movie>>(`${this.url}/movie/upcoming?api_key=${apiKey}&page=${page}`);
  }

  getNowPlayingMovies(page: number): Observable<List<Movie>> {
    return this.httpClient.get<List<Movie>>(`${this.url}/movie/now_playing?api_key=${apiKey}&page=${page}`);
  }

  getTrendingMovies(page: number): Observable<List<Movie>> {
    return this.httpClient.get<List<Movie>>(`${this.url}/trending/movie/day?api_key=${apiKey}&page=${page}`);
  }

  getCredits(id: number): Observable<Credits> {
    return this.httpClient.get<any>(`${this.url}/movie/${id}/credits?api_key=${apiKey}`);
  }
}
