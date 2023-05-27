import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Observable} from "rxjs";
import {Person} from "../../models/person/person.type";
import {List} from "../../models/list.type";
import {PersonService} from "../../services/person.service";

@Component({
  selector: 'app-person-page',
  templateUrl: './person-list-page.component.html',
  styleUrls: ['../list-page.component.css']
})
export class PersonListPageComponent implements OnInit{
  selectedValue: string = "trending";
  people: Observable<List<Person>> | undefined;
  currentPage: number = 1;
  maxPages: number = 0;
  constructor(private personService: PersonService, private titleService: Title) {
  }

  ngOnInit(): void {
    this.selectedValue = sessionStorage.getItem('peopleSelectedValue') || "trending";
    this.currentPage = parseInt(sessionStorage.getItem('peopleCurrentPage') || '1');
    this.maxPages = parseInt(sessionStorage.getItem('peopleMaxPages') || '0');
    this.getPeople(false);
    this.titleService.setTitle("People");
  }

  getPeople(categorySwitched: boolean): void {
    if (categorySwitched) {
      this.currentPage = 1;
    }
    switch(this.selectedValue) {
      case "popular":
        this.people = this.personService.getPopularPersonList(this.currentPage);
        break;
      case "trending":
        this.people = this.personService.getTrendingPersonList(this.currentPage);
        break;
    }
    if(this.people)
      this.people.subscribe(people => {
        this.maxPages = people.total_pages;
      });
    this.saveToSessionStorage()
  }


  private saveToSessionStorage() {
    sessionStorage.setItem('peopleSelectedValue', this.selectedValue);
    sessionStorage.setItem('peopleCurrentPage', this.currentPage.toString());
    sessionStorage.setItem('peopleMaxPages', this.maxPages.toString());
  }
}
