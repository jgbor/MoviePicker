import {Component, OnInit} from '@angular/core';
import {catchError, Observable, of} from "rxjs";
import {Person} from "../../models/person/person.type";
import {CombinedJobs, Job} from "../../models/person/combined-jobs.type";
import {ActivatedRoute} from "@angular/router";
import {PersonService} from "../../services/person.service";
import {Title} from "@angular/platform-browser";
import {MatSnackBar} from "@angular/material/snack-bar";

/**
 * Egy személy adatainak oldala.
 */
@Component({
  selector: 'app-person-page',
  templateUrl: './person-page.component.html',
  styleUrls: ['./person-page.component.css']
})
export class PersonPageComponent implements OnInit{
  personId: number = 0;
  person: Observable<Person> | undefined;
  credits: Observable<CombinedJobs> | undefined;
  firstFiveCast: Observable<Job[]> | undefined;
  firstFiveCrew: Observable<Job[]> | undefined;
  error: boolean = false;

  /**
   * Konstruktor.
   *
   * @param route - Az ActivatedRoute példány, a navigációs útvonal paramétereinek lekéréséhez.
   * @param personService - A PersonService példány, a személy adatainak lekéréséhez.
   * @param titleService - A Title példány, az oldal címének beállításához.
   * @param snackbar - A MatSnackBar példány, a Snackbar üzenetek megjelenítéséhez.
   */
  constructor(private route: ActivatedRoute, private personService: PersonService, private  titleService: Title, private snackbar: MatSnackBar) { }

  /**
   * Az OnInit interfész metódusa.
   * Inicializálja a komponenst.
   */
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.personId = params['id'];
      this.getPerson();
    });
    this.person?.subscribe(person => {
      this.titleService.setTitle(person.name);
    });
  }

  /**
   * A személy lekérése a megadott azonosító alapján.
   * Hiba esetén megjelenít egy Snackbar üzenetet és újrapróbálkozást kínál.
   */
  private getPerson() {
    this.error=false;
    this.person = this.personService.getPerson(this.personId).pipe(
      catchError(err => {
        console.log(err);
        this.error = true
        this.openSnackBar("Error occurred while fetching data", "Retry");
        return [];
      }));
    this.getCredits();
  }

  /**
   * A személy munkáinak lekérése a megadott azonosító alapján.
   * Hiba esetén megjelenít egy Snackbar üzenetet és újrapróbálkozást kínál.
   */
  private getCredits() {
    this.credits = this.personService.getCredits(this.personId).pipe(
      catchError(err => {
        console.log(err);
        this.error = true
        this.openSnackBar("Error occurred while fetching data", "Retry");
        return [];
      }));
    this.credits?.subscribe(credits => {
      this.firstFiveCast = of(credits.cast.slice(0, 5));
      this.firstFiveCrew = of(credits.crew.slice(0, 5));
    });
  }

  /**
   * Snackbar megnyitása hibaüzenettel és újrapróbálkozással.
   * @param message Az üzenet szövege.
   * @param action Az gomb szövege.
   */
  private openSnackBar(message: string, action: string) {
    let snackbarRef = this.snackbar.open(message, action, {
      verticalPosition: "top",
    });
    snackbarRef.onAction().subscribe(() => {
      this.getPerson();
    });
  }
}
