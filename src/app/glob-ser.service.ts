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


  public setNamaJurusan(namabaru)
  {
      this.nmjurusan = namabaru;
  }

   public setPnjlsnJurusan(pnjlsnbaru)
  {
      this.pnjlsan = pnjlsnbaru;
  }

  /**public simpanNama(namajrs){

  }*/
 

  constructor() { }

}