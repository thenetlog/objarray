import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})

export class ExpenseComponent implements OnInit {

  expenses$: any = [];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getExpense().subscribe(
      (data: any) => {this.expenses$ = data.data;}
    );
  }
    

}
