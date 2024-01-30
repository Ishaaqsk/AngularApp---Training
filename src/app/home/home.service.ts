import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpObj: HttpClient) { } getCats() {
    let Catsurl = " http://demo3211223.mockable.io/getCats";
    return this.httpObj.get(Catsurl);
  }


}
