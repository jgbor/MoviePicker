import {Component, OnInit} from '@angular/core';
import {Movie} from '../../models/movie.type';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit{
  movie: Movie | null = null;


  constructor(private movieService: MovieService) {
  }
  ngOnInit(): void {
    this.movieService.getMovie(550).subscribe(movie => {
      this.movie = movie;
    })
  }

}
