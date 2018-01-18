import {Injectable} from "angular2/core";

@Injectable()

export class MovieService{
  movies:String[];
  getAllMovies(){
    this.movies=['Titaniiiic','Volt Face','Seigneur des anneaux','Vikings'];
    return this.movies;
  }
  addMovie(movieTitleValue){
    this.movies.push(movieTitleValue);
  }
}
