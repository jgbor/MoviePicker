import {Pipe, PipeTransform} from '@angular/core';
import {Genre} from '../models/genre.type';

@Pipe({
  name: 'genreNames'
})
export class GenreNamesPipe implements PipeTransform {
  transform(genres: Genre[]): string {
    return genres.map(genre => genre.name).join(', ');
  }
}

