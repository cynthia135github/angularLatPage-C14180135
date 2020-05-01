import { Injectable } from '@angular/core';

@Injectable()
export class GlobSerService {

  public data :  String = 'abc';
  public nmjurusan=[];
  public pnjlsan = [];
  public jmlh = 0;

  public getNamaJurusan()
  {
    return this.nmjurusan;
  }

   public getPnjlsnJurusan()
  {
    return this.pnjlsan;
  }

  public getJumlah()
  {
    return this.jmlh;
  }

  public saving(a,b)
  {
    this.nmjurusan.push(a);
    this.pnjlsan.push(b);
    this.jmlh = this.jmlh + 1;
  }

  public editpenjelasan(txtpenjelasan,indek)
  {
    this.pnjlsan[indek] = txtpenjelasan;
  }

  public setNamaJurusan(namabaru)
  {
      this.nmjurusan = namabaru;
  }

   public setPnjlsnJurusan(pnjlsnbaru,indek)
  {
      this.pnjlsan[indek] = pnjlsnbaru;
  }

  /**public simpanNama(namajrs){

  }*/
 

  constructor() { }

}