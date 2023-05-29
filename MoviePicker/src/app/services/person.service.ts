import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Person} from "../models/person/person.type";
import {Observable} from "rxjs";
import {apiKey} from "../apikey";
import {List} from "../models/list.type";
import {CombinedJobs} from "../models/person/combined-jobs.type";

/**
 * A személy szolgáltatás felelős a színészek, rendezők és producerek adatainak lekérdezéséért a TMDB API felhasználásával.
 */
@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private url: string = "https://api.themoviedb.org/3"

  constructor(private httpClient: HttpClient) { }

  /**
   * Adott azonosítójú személy lekérdezése.
   * @param id A személy azonosítója.
   * @returns Az adott azonosítójú személy Observable formában.
   */
  getPerson(id: number): Observable<Person> {
    return this.httpClient.get<Person>(`${this.url}/person/${id}?api_key=${apiKey}`);
  }

  /**
   * Népszerű személyek listájának lekérdezése.
   * @param page Az oldalszám.
   * @returns A népszerű személyek lista Observable formában.
   */
  getPopularPersonList(page: number): Observable<List<Person>> {
    return this.httpClient.get<List<Person>>(`${this.url}/person/popular?api_key=${apiKey}&page=${page}`);
  }

  /**
   * Felkapott személyek listájának lekérdezése.
   * @param page Az oldalszám.
   * @returns A felkapott személyek lista Observable formában.
   */
  getTrendingPersonList(page: number): Observable<List<Person>> {
    return this.httpClient.get<List<Person>>(`${this.url}/trending/person/week?api_key=${apiKey}&page=${page}`);
  }

  /**
   * Adott azonosítójú személy munkáinak lekérdezése.
   * @param id A személy azonosítója.
   * @returns Az adott azonosítójú személy munkáinak Observable formában.
   */
  getCredits(id: number): Observable<CombinedJobs> {
    return this.httpClient.get<CombinedJobs>(`${this.url}/person/${id}/combined_credits?api_key=${apiKey}`);
  }
}
