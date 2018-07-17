import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})

export class IncomeComponent implements OnInit {

  incomes$: any = [];

  constructor(private data: DataService) {
   }

  ngOnInit() {
    this.data.getIncomes().subscribe(
      (data: any) => {this.incomes$ = data.data;}
    );
  }
}
