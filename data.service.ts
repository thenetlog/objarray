import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http'
// import { Observable, of } from 'rxjs';
// import { catchError, map, tap, filter} from 'rxjs/operators';
// import { Income } from './income';

interface myData {
  data: Object;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  
  public headers: HttpHeaders;
  readonly ROOT_URL = 'http://localhost:5000';
  // options: RequestOptions;
  // public token: string;
  

  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
    // this.headers.append('Content-Type', 'multipart/form-data')
    // this.headers.append('Accept', 'application/json');
  };

  storeExpense(expenseModel) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Access-Control-Allow-Headers': '*' }),
      };
    const body = new FormData();
    body.append('token', 'ZG90bmV0QVBJ');
    body.append('objInfo', JSON.stringify(expenseModel));
    return this.http.post(this.ROOT_URL + '/api/expense/SaveExpense', body, httpOptions);
  };

  deIncome(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Access-Control-Allow-Headers': '*' })
    }
    const body = new FormData();
    body.append('token', 'ZG90bmV0QVBJ');
  return this.http.post(this.ROOT_URL + '/api/income/DeleteIncome/' + id , body, httpOptions);
  }; 

  upIncome(Select) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Access-Control-Allow-Headers': '*' })
  };
    const body = new FormData();
    body.append('token', 'ZG90bmV0QVBJ');
    body.append('objInfo', JSON.stringify(Select));
    return this.http.post(this.ROOT_URL + '/api/income/SaveIncome', body, httpOptions);
  };

  storeIncome(incomeModel) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Access-Control-Allow-Headers': '*' })
      };
    const body = new FormData();
    body.append('token', 'ZG90bmV0QVBJ');
    body.append('objInfo', JSON.stringify(incomeModel));
    return this.http.post(this.ROOT_URL + '/api/income/SaveIncome', body, httpOptions);
  }

  getIncomes() {
    return this.http.get<myData>('http://localhost:5000/api/income/GetIncome/0');
  };

  getExpense() {
    return this.http.get<myData>('http://localhost:5000/api/expense/GetExpense/0');
  };

  //Update Expense
  upExpense(Select) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Access-Control-Allow-Headers': '*' })
    };
    const body = new FormData();
    body.append('token', 'ZG90bmV0QVBJ');
    body.append('objInfo', JSON.stringify(Select));
    return this.http.post(this.ROOT_URL + '/api/expense/SaveExpense', body, httpOptions);
  };

 }