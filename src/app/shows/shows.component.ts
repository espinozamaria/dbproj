import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
  public query: string;
  public shows= shows;
  constructor() { }

  ngOnInit() {
  }
}

let shows:Array<Shows> = [{
  title: 'Cinderella and Four Knights',
  url: "https://en.wikipedia.org/wiki/Cinderella_and_Four_Knights",
  releasedate: 2016,
  genre: "Romantic Comedy",
  description: "One day, their grandfather (Kim Yong-Geon) orders his 3 grandsons to attend his 5th wedding ceremony. Hyun-Min doesn't want to go, but he hires Ha-Won for 3 hours and takes her to his grandfather's wedding ceremony. His plan is to upstage his grandfather's wedding ceremony with the surprise appearance of Ha-Won. There, the grandfather witnesses Ha-Won's no-nonsense attitude towards Hyun-Min and decides to hire her as a live-in butler at the Sky House. He hopes she is able to change the ways of his grandsons.",
  thumbnail: "http://i.viewasian.com/info/51/cinderella-and-four-knights-youre-the-first.jpg",
  length: 16,
  watch: "https://www.dramafever.com/drama/4895/Cinderella_and_Four_Knights/",
},
{
  title: 'Signal',
  url:"https://en.wikipedia.org/wiki/Signal_(TV_series)",
  releasedate: 2016,
  genre: "Mystery",
  description: "A mysterious walkie talkie allows a detective in the year 2000 to communicate with a cold case profiler from 2015; with the power of fore and hindsight the two not only solve crimes but prevent them from ever taking place. However, a long-standing murder case is closer to home than either realizes.",
  thumbnail: "https://www.dramafever.com/st/img/nowplay/4686_Signal_Nowplay_Small1.jpg",
  length: 16,
  watch: "https://www.dramafever.com/drama/4686/Signal/",
},
{
  title: 'Gap-Dong',
  url: "https://en.wikipedia.org/wiki/Gap-dong",
  releasedate: 2014,
  genre: "Thriller",
  description: "1996, the (fictional) city of Iltan in Gyeonggi Province: A young girl gets brutally murdered by an unknown person on a dark night. As the city is gripped by a succession of serial killings, a total of nine murders within a twelve-kilometer radius since 1993, the police conclude that a man they've nicknamed 'Gap-dong' is behind the crimes. But detective Yang Cheol-gon is convinced that the actual killer is Ha Il-sik, a resident of the town who is intellectually challenged. His attempt to arrest the suspect fails as Ha commits suicide to prove his innocence. His death inspires his son Moo-yeom to become a cop to clear his father's name and restore his honor.",
  thumbnail: "https://upload.wikimedia.org/wikipedia/en/5/57/Gap-dong-poster.jpg",
  length: 20,
  watch: "",
},
{
  title: "The Master's Sun",
  url: "https://en.wikipedia.org/wiki/Master%27s_Sun",
  releasedate: 2013,
  genre: "Romantic Comedy",
  description: "Joo Joong-won (So Ji-sub) is the stingy and greedy CEO of Kingdom, a conglomerate that includes a major department store and hotel. He meets the gloomy Tae Gong-shil (Gong Hyo-jin), who started seeing ghosts after an accident. Their lives take a new turn as they work together to deal with the terror and sadness brought about by the spirits, while delving into a kidnapping incident in Joong-won's past.",
  thumbnail: "https://www.dramafever.com/st/img/nowplay/4305_TheMastersSun_Nowplay_Small.jpg",
  length: 17,
  watch: "https://www.viki.com/tv/11915c-masters-sun?q=the%20master%27s%20sun"
},
]

export class Shows{
  title: string;
  url:string;
  releasedate: number;
  genre: string;
  description: string;
  thumbnail: string;
  length:number;
  watch: string;
}
