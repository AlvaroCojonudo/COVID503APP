import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Informe } from '../classes/informe';
@Injectable({
  providedIn: 'root'
})
export class Covid19Service {
  constructor(private http: HttpClient) { }
  getSummarySV() {
    return this.http.get('https://api.covid19api.com/total/dayone/country/el%20salvador');
  }
  getSummaryWorldPopular() {
    //let worldCases = [];
    return this.http.get('https://api.covid19api.com/summary');
  }
  getSummaryUS(){
    return this.http.get('https://api.covid19api.com/total/dayone/country/united%20states');
  }
  getSummaryByCountry(country: string){
    //console.log(`https://api.covid19api.com/total/dayone/country/${country}`);
    return this.http.get(`https://api.covid19api.com/total/dayone/country/${country}`);
  }
}
