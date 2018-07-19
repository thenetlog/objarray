import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http'
import { Observable, of } from 'rxjs';
import { catchError, map, tap, filter} from 'rxjs/operators';
import { Income } from './income';

interface myData {
  data: Object;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private headers: HttpHeaders;
  readonly ROOT_URL = 'http://localhost:5000';
  

  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders({'Content-Type': 'application/json' });
  }

  upIncome(Select) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Access-Control-Allow-Headers': '*' })
  };
    const body = new FormData();
    body.append('token', 'ZG90bmV0QVBJ');
    body.append('objInfo', JSON.stringify(Select));
    return this.http.post(this.ROOT_URL + '/api/income/SaveIncome', body, httpOptions);
  }''

  getIncomes() {
    return this.http.get<myData>(this.ROOT_URL + 'api/income/GetIncome/0');
  }

  getExpense() {
    return this.http.get<myData>(this.ROOT_URL + '/api/expense/GetExpense/0');
  }

  

}
