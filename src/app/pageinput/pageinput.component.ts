import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobSerService } from '../glob-ser.service';

@Component({
  selector: 'app-pageinput',
  templateUrl: './pageinput.component.html',
  styleUrls: ['./pageinput.component.css']
})
export class PageinputComponent implements OnInit {

 a = "";
 b = "";
 data: String;
 constructor(private route : ActivatedRoute, public varglob:GlobSerService) {
    this.varglob.simpan(this.a,this.b);
  }
  
  


  ngOnInit() {
  }


}