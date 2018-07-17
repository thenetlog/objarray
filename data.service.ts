import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';  
import 'rxjs/add/observable/throw';  
//import { filter, map } from 'rxjs/operators';

interface myData {
  data: Object;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getIncomes() {
    return this.http.get<myData>('http://localhost:5000/api/income/GetIncome/0');
  }

  getExpense() {
    return this.http.get<myData>('http://localhost:5000/api/expense/GetExpense/0');
  }

}
