import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Person} from "../models/person/person.type";
import {Observable} from "rxjs";
import {apiKey} from "../apikey";
import {List} from "../models/list.type";
import {CombinedCredits} from "../models/person/combined-credits.type";

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private url: string = "https://api.themoviedb.org/3"
  constructor(private httpClient: HttpClient) { }

  getPerson(id: number): Observable<Person> {
    return this.httpClient.get<Person>(`${this.url}/person/${id}?api_key=${apiKey}`);
  }

  getPopularPersonList(page: number): Observable<List<Person>> {
    return this.httpClient.get<List<Person>>(`${this.url}/person/popular?api_key=${apiKey}&page=${page}`);
  }

  getTrendingPersonList(page: number): Observable<List<Person>> {
    return this.httpClient.get<List<Person>>(`${this.url}/trending/person/week?api_key=${apiKey}&page=${page}`);
  }

  getCredits(id: number): Observable<CombinedCredits> {
    return this.httpClient.get<CombinedCredits>(`${this.url}/person/${id}/combined_credits?api_key=${apiKey}`);
  }
}
