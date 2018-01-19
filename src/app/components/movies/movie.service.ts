import {Injectable} from "angular2/core";
import {Movie} from "./movie";

@Injectable()

export class MovieService{
  movies:Movie[]=[
    new Movie('Game of thrones',['malick basoum','jules gra','seydou niane'], ['tidiane daff','jules ba'],1998),
    new Movie('seigneur des anneaux',['babacar','ahmed','gueda ba'], ['jean samba','oumar ba'],2000),
    new Movie('Abou',['abdoul','douda','seynabou seck'], ['alassane fall','jean pierre'],2005)
  ];



  getAllMovies(){
   return this.movies;

  }
  addMovie(movie){
    this.movies.push(movie);
  }
}
