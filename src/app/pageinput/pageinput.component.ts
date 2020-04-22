import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pageinput',
  templateUrl: './pageinput.component.html',
  styleUrls: ['./pageinput.component.css']
})
export class PageinputComponent implements OnInit {

 constructor(private route : ActivatedRoute) { }
  
  ngOnInit() {
  }

  //Simpan(a,b){
  //  this.nm = a;
  //  this.penjelasan = b;
  //}

}