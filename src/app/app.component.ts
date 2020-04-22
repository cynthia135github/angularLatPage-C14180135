import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'This is Main Page';
  nmjurusan = [];
  pnjlsan = [];
  constructor(private router : Router) {}
  Edit() {
    this.router.navigate(['/pageedit']);
  }

   Input() {
    this.router.navigate(['/pageinput']);
  }

  List(){
    this.router.navigate(['/pagelist']);
  }

  savearr(nm,p)
  {
    

  }
}
