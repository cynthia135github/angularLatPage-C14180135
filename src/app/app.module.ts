import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PageinputComponent } from './pageinput/pageinput.component';
import { PagelistComponent } from './pagelist/pagelist.component';
import { PageeditComponent } from './pageedit/pageedit.component';



const ROUTES:Routes = [

  { path:'pageinput', component : PageinputComponent },

  { path:'pageedit', component : PageeditComponent },

  { path:'pagelist', component : PagelistComponent }

]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent, HelloComponent, PageinputComponent, PagelistComponent, PageeditComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

  providers: [
  PageinputComponent
  ]
 }
