import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

 

  getIncomes() {
    const url = "http://localhost:5000/api/income/GetIncome/0";
    return this.http.get(url);
  }

}
