import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {Observable} from "rxjs";
import * as _ from "lodash";

@Component({
  selector: 'app-root',
  templateUrl: './movie-picker-app.component.html',
  styleUrls: ['./movie-picker-app.component.css']
})
export class MoviePickerAppComponent{
  title = "MoviePicker"

  constructor(private router: Router) {}
}
