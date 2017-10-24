import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  public query: string;
  public movies = movies;
  constructor() { }

  ngOnInit() {
  }
}


let movies:Array<Movie> = [
  {
    title: "Blind",
    url: "https://en.wikipedia.org/wiki/Blind_(2011_film)",
    releasedate: 2011,
    genre: "Thriller",
    description: "A blind woman gives testimony about a hit-and-run case, then she is forced to confront the killer on her own.",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/e/e8/Blind_%282011_film%29_poster.jpg",
  },
  {
    title: "Love O2O",
    url: "https://en.wikipedia.org/wiki/Love_O2O_(film)",
    releasedate: 2016,
    genre: "Romantic Comedy",
    description: "Xiao Nai (Jing Boran) is a gaming expert, who is also the most popular student on campus. One day, he comes across the campus goddess Bei Wei Wei (Angelababy) and it was love at first sight. However, it was not Wei Wei's looks that he noticed, but her skill mastery of the online RPG game that they both play. Now, Xiao Nai must use his skills both in real life and online to capture Wei Wei's heart. But does their love have the EXP to succeed, or will this relationship never level up?",
    thumbnail: "https://2.bp.blogspot.com/-AiIk5sK2HZA/V8KJ8Pzsc9I/AAAAAAAAEgQ/8-JEpciro2wv_7SfsC5yKd9BoSBhr-g4gCEw/s1600/Love%2BO2O%2B11.jpg"
  }
]

export class Movie{
  title: string;
  url:string;
  releasedate: number;
  genre: string;
  description: string;
  thumbnail: string;
}
