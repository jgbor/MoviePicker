import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Movie} from '../models/movie.type';
import {HttpClient} from "@angular/common/http";
import {apiKey} from "../apikey";
import {Credits} from "../models/credits.type";
import {List} from "../models/lists/list.type";
import {MovieListItem} from "../models/lists/movie-list-item";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url: string = "https://api.themoviedb.org/3"
  constructor(private httpClient: HttpClient) { }

  getMovie(id: number): Observable<Movie> {
    return this.httpClient.get<Movie>(`${this.url}/movie/${id}?api_key=${apiKey}`)
  }

  getDiscoverMovies(): Observable<List<MovieListItem>> {
    return this.httpClient.get<List<MovieListItem>>(`${this.url}/discover/movie?api_key=${apiKey}`)
  }

  getPopularMovies(): Observable<List<MovieListItem>> {
    return this.httpClient.get<List<MovieListItem>>(`${this.url}/movie/popular?api_key=${apiKey}`)
  }

  getTopRatedMovies(): Observable<List<MovieListItem>> {
    return this.httpClient.get<List<MovieListItem>>(`${this.url}/movie/top_rated?api_key=${apiKey}`)
  }

  getUpcomingMovies(): Observable<List<MovieListItem>> {
    return this.httpClient.get<List<MovieListItem>>(`${this.url}/movie/upcoming?api_key=${apiKey}`)
  }

  getNowPlayingMovies(): Observable<List<MovieListItem>> {
    return this.httpClient.get<List<MovieListItem>>(`${this.url}/movie/now_playing?api_key=${apiKey}`)
  }

  getCredits(id: number): Observable<Credits> {
    return this.httpClient.get<any>(`${this.url}/movie/${id}/credits?api_key=${apiKey}`)
  }
}
