import { Component, OnInit } from '@angular/core';
import { GlobSerService } from '../glob-ser.service';

@Component({
  selector: 'app-pageedit',
  templateUrl: './pageedit.component.html',
  styleUrls: ['./pageedit.component.css']
})
export class PageeditComponent implements OnInit {

  dnama = [];
  dpenjelasan = [];
  jumlah = 0;
  //carinama = "";
  txtnama = "";
  txtpenjelasan = "";
  constructor(public varglob:GlobSerService) { 

    this.dnama = this.varglob.getNamaJurusan();
    this.dpenjelasan = this.varglob.getPnjlsnJurusan();
    this.jumlah = this.varglob.getJumlah();

  }

  editing(){
    for(var i=0; i<this.jumlah;i++)
    {
       if(this.dnama[i] == this.txtnama)
       {
         this.dpenjelasan[i] = this.varglob.setPnjlsnJurusan(this.txtpenjelasan);
       }
    }
  }

  ngOnInit() {
  }

}