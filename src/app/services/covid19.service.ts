import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Covid19Service {  
  constructor(private http: HttpClient) { }
  getSummarySV() {
    return this.http.get('https://api.covid19api.com/total/dayone/country/el%20salvador');
  }
}
