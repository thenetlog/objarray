import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Income } from '../income';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})

export class IncomeComponent implements OnInit {

  incomes$: any = [];

  @Input() income: Income;
  selectedIncome: any = {};

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getIncomes().subscribe(
      (data: any) => {this.incomes$ = data.data;},
      err => console.error(err),
      () => console.log('done loading'),
    );
  }

  onSelect(inc: Income) {
    this.selectedIncome = inc;
  }

}
