import {Component, OnInit} from 'angular2/core';
import {MovieService} from "./movie.service";
import {Movie} from './movie';
import {Control, FormBuilder} from 'angular2/common';
import {ControlGroup} from 'angular2/common';
import {Validators} from 'angular2/common';


@Component({
  selector:'movies',
  templateUrl:'app/components/movies/movies.component.html',
  providers:[MovieService]
})

export class Movies implements OnInit{


  movieService:MovieService;
  recentlyWatchMovies:Movie[];
  nbOfMovie: Number;
  movie: Movie;
  myForm:ControlGroup;
  formBuilder: FormBuilder;

  constructor(movieService: MovieService, formBuilder: FormBuilder){
    this.movieService=movieService;
    this.formBuilder=formBuilder;

  }

  addMovie(){
    console.log(this.myForm);
    let formValue=this.myForm.value;

    this.movie= new Movie();
    this.movie.title=formValue.title;
    this.movie.actors=formValue.actors;
    this.movie.directors=formValue.directors;
    this.movie.year=formValue.year;

    this.movieService.addMovie(this.movie);
    this.clearForm();
    this.nbOfMovie=this.recentlyWatchMovies.length;

    console.log(this.recentlyWatchMovies);
    this.movie= new Movie();
  }
    clearForm(){
    let controlsObj=this.myForm.controls;
    for (let prop in controlsObj){
      if(controlsObj.hasOwnProperty(prop)){
        console.log(controlsObj[prop]);
        (controlsObj[prop] as Control).updateValue('');
      }
    }
    }


  ngOnInit(){
    this.recentlyWatchMovies=this.movieService.getAllMovies();
    this.nbOfMovie=this.recentlyWatchMovies.length;

    this.myForm=this.formBuilder.group({
      'title':['', Validators.required],
      'actors': [['']],
      'directors': [['']],
      'year': ['2016', Validators.required]
    })
  }
}
