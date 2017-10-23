import{ NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{ HomepageComponent } from './homepage/homepage.component';

const appRoutes: Routes = [ //THis will know where to go when to go
  {
    path: 'home',
    component: HomepageComponent,
  },
  // {
  //   path:'movies',
  //   component:MoviesComponnt,
  // }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class RoutingModule {}
