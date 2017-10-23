import{ NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{ HomepageComponent } from './homepage/homepage.component';
import{ CategoriesComponent } from './categories/categories.component';
import { MoviesComponent } from './movies/movies.component';
import {ShowsComponent } from './shows/shows.component';

const appRoutes: Routes = [ //THis will know where to go when to go
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path:'categories',
    component:CategoriesComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'shows',
    component: ShowsComponent,
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class RoutingModule {}
