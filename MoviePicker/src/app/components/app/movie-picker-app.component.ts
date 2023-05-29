import {Component} from '@angular/core';

/**
 * A MoviePicker alkalmazás gyökér komponense.
 */
@Component({
  selector: 'app-root',
  templateUrl: './movie-picker-app.component.html',
  styleUrls: ['./movie-picker-app.component.css']
})
export class MoviePickerAppComponent{
  title = "MoviePicker"

  constructor() {}
}
