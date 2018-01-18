import {Component} from 'angular2/core';
import {Movies} from '../movies/movies.component'

@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.html',
  styleUrls: ['app/components/home/home.css'],
  directives: [Movies]

})
export class Home {

  constructor() {}

}
