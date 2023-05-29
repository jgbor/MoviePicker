import {Pipe, PipeTransform} from '@angular/core';
import {Genre} from '../models/common/genre.type';

/**
 * A csővezeték (pipe) felelős a műfajok neveinek megjelenítéséért vesszővel elválasztva.
 */
@Pipe({
  name: 'genreNames'
})
export class GenreNamesPipe implements PipeTransform {
  /**
   * A műfajok neveinek összefűzése vesszővel elválasztva.
   * @param genres A műfajok tömbje.
   * @returns A műfajok neveinek összefűzött string formában.
   */
  transform(genres: Genre[]): string {
    return genres.map(genre => genre.name).join(', ');
  }
}

