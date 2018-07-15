import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

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
    const url = "http://localhost:5000/api/income/GetIncome/0";
    this.url: Object;
    // let pro = Object.keys(url);
    // let goodres = [];
    // for (prop of pro){
    //   goodres.push(pro[prop]);
    // }
    return this.http.get(url);
  }

}
