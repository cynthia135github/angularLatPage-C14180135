import { Component, OnInit } from '@angular/core';
import { GlobSerService } from '../glob-ser.service';
@Component({
  selector: 'app-pagelist',
  templateUrl: './pagelist.component.html',
  styleUrls: ['./pagelist.component.css']
})
export class PagelistComponent implements OnInit {

  dtnama = [];
  dtpenjelasan = [];
  jum = 0;
  constructor(public varglob:GlobSerService) {
   this.dtnama = this.varglob.getNamaJurusan();
    this.dtpenjelasan = this.varglob.getPnjlsnJurusan();
    this.jum = this.varglob.getJumlah();
  }

  ngOnInit() {
  }

}