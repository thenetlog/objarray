import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

interface myData {
  data: Object;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  incomes$: any = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getIncomes().subscribe(
      (data: any) => {this.incomes$ = data.data;}
    );
  }
}
