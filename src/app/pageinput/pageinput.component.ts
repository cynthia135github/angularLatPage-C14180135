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
 datanama = [];
 datap = [];
 j = 0;
 constructor(private route : ActivatedRoute, public varglob:GlobSerService) {
    //this.varglob.simpan(this.a,this.b);
    this.datanama = this.varglob.getNamaJurusan();
    this.datap = this.varglob.getPnjlsnJurusan();
    this.j = this.varglob.getJumlah();
  }
  
  
  /*simpan(a,b)
  {
     this.datanama.push(a);
     this.datap.push(b);
     this.j += 1;
  }*/

  simpan(a,b)
  {
     this.varglob.saving(a,b);
  }

  ngOnInit() {
  }


}