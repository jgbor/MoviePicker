import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {catchError, Observable} from "rxjs";
import {Person} from "../../models/person/person.type";
import {List} from "../../models/list.type";
import {PersonService} from "../../services/person.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ListComponent} from "../list-component";

/**
 * Személyeket listázó oldal komponense.
 */
@Component({
  selector: 'app-person-page',
  templateUrl: './person-list-page.component.html',
  styleUrls: ['../list-page.component.css']
})
export class PersonListPageComponent implements OnInit, ListComponent{
  selectedValue: string = "trending";
  people: Observable<List<Person>> | undefined;
  currentPage: number = 1;
  maxPages: number = 0;
  error: boolean = false;

  /**
   * Konstruktor az osztályhoz.
   * @param personService A PersonService osztály példánya.
   * @param titleService A Title osztály példánya.
   * @param snackbar Az MatSnackBar osztály példánya.
   */
  constructor(private personService: PersonService, private titleService: Title, private snackbar: MatSnackBar) {}

  /**
   * Az OnInit interfész metódusa.
   * Inicializálja a komponenst.
   */
  ngOnInit(): void {
    this.selectedValue = sessionStorage.getItem('peopleSelectedValue') || "trending";
    this.currentPage = parseInt(sessionStorage.getItem('peopleCurrentPage') || '1');
    this.maxPages = parseInt(sessionStorage.getItem('peopleMaxPages') || '0');
    this.getPeople(false);
    this.titleService.setTitle("People");
  }

  /**
   * Személyek lekérdezése a kiválasztott kategóriára.
   * @param categorySwitched Igaz, ha a kategória váltás történt, különben hamis.
   */
  getPeople(categorySwitched: boolean): void {
    this.error=false;
    if (categorySwitched) {
      this.currentPage = 1;
    }
    switch(this.selectedValue) {
      case "popular":
        this.people = this.personService.getPopularPersonList(this.currentPage).pipe(
          catchError(err => {
            console.log(err);
            this.error=true;
            this.openSnackBar("Error occurred while fetching data", "Retry");
            return [];
          }));
        break;
      case "trending":
        this.people = this.personService.getTrendingPersonList(this.currentPage).pipe(
          catchError(err => {
            console.log(err);
            this.error=true;
            this.openSnackBar("Error occurred while fetching data", "Retry");
            return [];
          }));
        break;
    }
    if(this.people)
      this.people.subscribe(people => {
        this.maxPages = people.total_pages;
      });
    this.saveToSessionStorage()
  }


  /**
   * Adatok mentése a böngésző session storage-jába.
   */
  saveToSessionStorage() {
    sessionStorage.setItem('peopleSelectedValue', this.selectedValue);
    sessionStorage.setItem('peopleCurrentPage', this.currentPage.toString());
    sessionStorage.setItem('peopleMaxPages', this.maxPages.toString());
  }

  /**
   * Snackbar megnyitása hibaüzenettel és újrapróbálkozással.
   * @param message Az üzenet szövege.
   * @param action Az gomb szövege.
   */
  openSnackBar(message: string, action: string) {
    let snackbarRef = this.snackbar.open(message, action, {
      verticalPosition: "top",
    });
    snackbarRef.onAction().subscribe(() => {
      this.getPeople(false);
    });
  }
}
