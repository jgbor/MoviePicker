import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.type';
import {HttpClient} from "@angular/common/http";
import {apiKey} from "../apikey";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url: string = "https://api.themoviedb.org/3"
  constructor(private httpClient: HttpClient) { }

  getMovie(id: number): Observable<Movie> {
    return this.httpClient.get<Movie>(`${this.url}/movie/${id}?api_key=${apiKey}`)
  }
}
