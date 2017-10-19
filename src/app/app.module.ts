import { BrowserModule } from '@angular/platform-browser';
import{ FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Pipes
import{ SearchByPipe } from './pipes/search-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchByPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
