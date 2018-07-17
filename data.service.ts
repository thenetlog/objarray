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

  readonly ROOT_URL = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getUsers() {
    const url = "https://jsonplaceholder.typicode.com/users";
    return this.http.get(url)
  }

  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId)
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  // getIncomes() {
  //   const urls = "http://localhost:5000/api/income/GetIncome/0";
  //   var resultAr = Object.keys(urls).map(function(urlNameIndex){
  //     let url = urls[urlNameIndex];
  //     return url;
  //   });
  //   return this.http.get(urls);
  // }

  getIncomes() {
    //const url = "http://localhost:5000/api/income/GetIncome/0";
    // let pro = Object.keys(url);
    // let goodres = [];
    // for (prop of pro){
    //   goodres.push(pro[prop]);
    // }
    return this.http.get<myData>('http://localhost:5000/api/income/GetIncome/0');
  }

  getExpense() {
    //const url = "http://localhost:5000/api/expense/GetExpense/0";
    return this.http.get<myData>('http://localhost:5000/api/expense/GetExpense/0');
  }

  // insertIncome() {
  //   return this.http.
  // }

}
