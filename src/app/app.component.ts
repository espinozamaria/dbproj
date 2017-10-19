import { Component } from '@angular/core';
import { SearchByPipe } from './pipes/search-by.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public list;
  public query: string;
  public movies = movies;
  public shows = shows;
  public result;
  //
   getMovies(): void{
     for(let i=0;i<movies.length;i++){
       console.log("The length of movies is: " , movies.length);
     if(this.query == movies[i].title)
     {
       this.result = this.list;
       this.list = movies[i];
       console.log("this.list: ", this.list);
     }
   }
 //}
  //   //this.list = movies;
  //   input = this.query;
  //   console.log(this.list[0].title);
  //   console.log("The movie inputted was: ", this.query);
  //   for(let i=0;i<this.list.length;i++){
  //   if(this.query == this.list[i].title){
  //     console.log("Movie title found: ",this.list[i].title);
  //   }
  //   }
  }
  getShows(){
    //pull up the shows that include the keywords of the query typed into the input box.
    for(let i=0;i<shows.length;i++){
    console.log("The length of shows is: " , shows.length);
    console.log("shows[i].title", shows[i].title);
    if(this.query == shows[i].title)
    {
      this.result = this.list;
      this.list = shows[i];
      console.log("this.list: ", this.list);
      return this.list;
    }
  }
}
  searchPosts(){
    console.log("this.query: ", this.query);
    //console.log("The list of movie objects: ", movies);
    //this.getMovies(this.query);
    this.getShows();
    console.log("this.shows", this.shows);
    this.getMovies();
    //console.log("movies[0].title", movies[0].title);
    console.log("This.movies", this.movies);
    //console.log("Logging this: ", this);

  }
}

// let blind: {
//   title: "Blind",
//   url: "https://en.wikipedia.org/wiki/Blind_(2011_film)",
//   releasedate: 2011,
//   genre: "Thriller",
//   description: "A blind woman gives testimony about a hit-and-run case, then she is forced to confront the killer on her own.",
//   thumbnail: "https://en.wikipedia.org/wiki/Blind_(2011_film)#/media/File:Blind_(2011_film)_poster.jpg"
// };
// let loveo2o: {
//   title: "Love O2O",
//   url: "https://en.wikipedia.org/wiki/Love_O2O_(film)",
//   releasedate: 2016,
//   genre: "Romantic Comedy",
//   description: "Xiao Nai (Jing Boran) is a gaming expert, who is also the most popular student on campus. One day, he comes across the campus goddess Bei Wei Wei (Angelababy) and it was love at first sight. However, it was not Wei Wei's looks that he noticed, but her skill mastery of the online RPG game that they both play. Now, Xiao Nai must use his skills both in real life and online to capture Wei Wei's heart. But does their love have the EXP to succeed, or will this relationship never level up?",
//   thumbnail: "https://en.wikipedia.org/wiki/Love_O2O_(film)#/media/File:Love_O2O_poster.jpeg"
// }
let movies:Array<Movie> = [
  {
    title: "Blind",
    url: "https://en.wikipedia.org/wiki/Blind_(2011_film)",
    releasedate: 2011,
    genre: "Thriller",
    description: "A blind woman gives testimony about a hit-and-run case, then she is forced to confront the killer on her own.",
    thumbnail: "https://en.wikipedia.org/wiki/Blind_(2011_film)#/media/File:Blind_(2011_film)_poster.jpg"
  },
  {
    title: "Love O2O",
    url: "https://en.wikipedia.org/wiki/Love_O2O_(film)",
    releasedate: 2016,
    genre: "Romantic Comedy",
    description: "Xiao Nai (Jing Boran) is a gaming expert, who is also the most popular student on campus. One day, he comes across the campus goddess Bei Wei Wei (Angelababy) and it was love at first sight. However, it was not Wei Wei's looks that he noticed, but her skill mastery of the online RPG game that they both play. Now, Xiao Nai must use his skills both in real life and online to capture Wei Wei's heart. But does their love have the EXP to succeed, or will this relationship never level up?",
    thumbnail: "https://en.wikipedia.org/wiki/Love_O2O_(film)#/media/File:Love_O2O_poster.jpeg"
  }
]

let shows:Array<Shows> = [{
  title: 'Cinderella and Four Knights',
  url: "https://www.dramafever.com/drama/4895/Cinderella_and_Four_Knights/",
  releasedate: 2016,
  genre: "Romantic Comedy",
  description: "One day, their grandfather (Kim Yong-Geon) orders his 3 grandsons to attend his 5th wedding ceremony. Hyun-Min doesn't want to go, but he hires Ha-Won for 3 hours and takes her to his grandfather's wedding ceremony. His plan is to upstage his grandfather's wedding ceremony with the surprise appearance of Ha-Won. There, the grandfather witnesses Ha-Won's no-nonsense attitude towards Hyun-Min and decides to hire her as a live-in butler at the Sky House. He hopes she is able to change the ways of his grandsons.",
  thumbnail: "https://en.wikipedia.org/wiki/Cinderella_and_Four_Knights#/media/File:Cinderella_and_Four_Knights_-_Promotional_poster.jpg",
  length: 16,
},
{
  title: 'Signal',
  url:"https://www.dramafever.com/drama/4686/Signal/",
  releasedate: 2016,
  genre: "Mystery",
  description: "A mysterious walkie talkie allows a detective in the year 2000 to communicate with a cold case profiler from 2015; with the power of fore and hindsight the two not only solve crimes but prevent them from ever taking place. However, a long-standing murder case is closer to home than either realizes.",
  thumbnail: "https://en.wikipedia.org/wiki/Signal_(TV_series)#/media/File:Signal_Korean_Drama.jpg",
  length: 16,
},
{
  title: 'Gap-Dong',
  url: "https://en.wikipedia.org/wiki/Gap-dong",
  releasedate: 2014,
  genre: "Thriller",
  description: "1996, the (fictional) city of Iltan in Gyeonggi Province: A young girl gets brutally murdered by an unknown person on a dark night. As the city is gripped by a succession of serial killings, a total of nine murders within a twelve-kilometer radius since 1993, the police conclude that a man they've nicknamed 'Gap-dong' is behind the crimes. But detective Yang Cheol-gon is convinced that the actual killer is Ha Il-sik, a resident of the town who is intellectually challenged. His attempt to arrest the suspect fails as Ha commits suicide to prove his innocence. His death inspires his son Moo-yeom to become a cop to clear his father's name and restore his honor.",
  thumbnail: "https://en.wikipedia.org/wiki/Gap-dong#/media/File:Gap-dong-poster.jpg",
  length: 20,
},
{
  title: "The Master's Sun",
  url: "https://www.viki.com/tv/11915c-masters-sun?q=the%20master%27s%20sun",
  releasedate: 2013,
  genre: "Romantic Comedy",
  description: "Joo Joong-won (So Ji-sub) is the stingy and greedy CEO of Kingdom, a conglomerate that includes a major department store and hotel. He meets the gloomy Tae Gong-shil (Gong Hyo-jin), who started seeing ghosts after an accident. Their lives take a new turn as they work together to deal with the terror and sadness brought about by the spirits, while delving into a kidnapping incident in Joong-won's past.",
  thumbnail: "https://en.wikipedia.org/wiki/Master%27s_Sun#/media/File:Sun_of_the_Lord-poster.jpg",
  length: 17,
},
]

export class Movie{
  title: string;
  url:string;
  releasedate: number;
  genre: string;
  description: string;
  thumbnail: string;
}

export class Shows{
  title: string;
  url:string;
  releasedate: number;
  genre: string;
  description: string;
  thumbnail: string;
  length:number;
}
