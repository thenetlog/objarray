import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
