import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {Person} from "../../models/person/person.type";
import {CombinedCredits, CombinedCreditsCast, CombinedCreditsCrew} from "../../models/person/combined-credits.type";
import {ActivatedRoute} from "@angular/router";
import {PersonService} from "../../services/person.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-person-page',
  templateUrl: './person-page.component.html',
  styleUrls: ['./person-page.component.css']
})
export class PersonPageComponent implements OnInit{
  personId: number = 0;
  person: Observable<Person> | undefined;
  credits: Observable<CombinedCredits> | undefined;
  firstFiveCast: Observable<CombinedCreditsCast[]> | undefined;
  firstFiveCrew: Observable<CombinedCreditsCrew[]> | undefined;


  constructor(private route: ActivatedRoute, private personService: PersonService, private  titleService: Title) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.personId = params['id'];
      this.getPerson();
    });
    this.person?.subscribe(person => {
      this.titleService.setTitle(person.name);
    });
  }

  private getPerson() {
    this.person = this.personService.getPerson(this.personId);
    this.getCredits();
  }

  private getCredits() {
    this.credits = this.personService.getCredits(this.personId);
    this.credits?.subscribe(credits => {
      this.firstFiveCast = of(credits.cast.slice(0, 5));
      this.firstFiveCrew = of(credits.crew.slice(0, 5));
    });
  }
}
