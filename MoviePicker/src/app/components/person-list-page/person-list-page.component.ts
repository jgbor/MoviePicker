import {Component, OnInit} from '@angular/core';
import {SeriesService} from "../../services/series.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-person-page',
  templateUrl: './person-list-page.component.html',
  styleUrls: ['./person-list-page.component.css']
})
export class PersonListPageComponent implements OnInit{
  constructor(private seriesService: SeriesService, private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle("People");
  }
}
