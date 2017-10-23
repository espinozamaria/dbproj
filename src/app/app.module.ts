import { BrowserModule } from '@angular/platform-browser';
import{ FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {RoutingModule} from './app.routes';

import { AppComponent } from './app.component';

//Pipes
import{ SearchByPipe } from './pipes/search-by.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CategoriesComponent } from './categories/categories.component';
import { MoviesComponent } from './movies/movies.component';
import { ShowsComponent } from './shows/shows.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchByPipe,
    NavbarComponent,
    HomepageComponent,
    CategoriesComponent,
    MoviesComponent,
    ShowsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //Routing modules should be the last thing on the list, otherwise bad things happen
    //these modules are loaded in order
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
