export class Movie{
  title: string;
  actors: string[];
  directors: string[];
  year: number;
  constructor(title:string='',actors:string[]=[], directors:string[]=[], year=2016){
    this.title=title;
    this.actors=actors;
    this.directors=directors;
    this.year=year;
  }
}
