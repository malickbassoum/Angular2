import {Component, OnInit} from 'angular2/core';
import {MovieService} from "./movie.service";
import {Movie} from './movie';

@Component({
  selector:'movies',
  templateUrl:'app/components/movies/movies.component.html',
  providers:[MovieService]
})

export class Movies implements OnInit{


  movieService:MovieService;
  recentlyWatchMovies:Movie[];
  nbOfMovie: Number;

  constructor(movieService: MovieService){
    this.movieService=movieService;

  }

  addMovie(movie){
    this.movieService.addMovie(movie);
    this.nbOfMovie=this.recentlyWatchMovies.length;
  }
  ngOnInit(){
    this.recentlyWatchMovies=this.movieService.getAllMovies();
    this.nbOfMovie=this.recentlyWatchMovies.length;
  }
}
