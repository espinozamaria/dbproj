import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blind',
  templateUrl: './blind.component.html',
  styleUrls: ['./blind.component.css']
})
export class BlindComponent implements OnInit {
  public blind = movies;
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
    name: "blind",
    watch: " ",
  },
]

export class Movie{
  title: string;
  url:string;
  releasedate: number;
  genre: string;
  description: string;
  thumbnail: string;
  name: string;
  watch: string;
}
