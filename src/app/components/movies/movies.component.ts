import {Component} from 'angular2/core';
import {MovieService} from "./movie.service";

@Component({
  selector:'movies',
  templateUrl:'app/components/movies/movies.component.html',
  providers:[MovieService]
})

export class Movies{
  // recentlyWatchMovies=['Titanic','Volt Face','Seigneur des anneaux','Vikings'];

  movieService:MovieService;
  recentlyWatchMovies:string[];
  constructor(movieService: MovieService){
    this.movieService=movieService;
    this.recentlyWatchMovies=movieService.getAllMovies();
  }

  addMovie(movieTitleValue){
    this.movieService.addMovie(movieTitleValue);
  }
}


