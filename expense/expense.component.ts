import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Expense } from '../expense';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  expenses$: any = [];

  @Input() expense: Expense;
  selectedExpense: any = {};

  constructor(private data: DataService, private location: Location) { }

  //Read
  ngOnInit(): void {
    this.data.getExpense().subscribe(
      (data: any) => {this.expenses$ = data.data;}
    );
  }

  //Select for edit
  onSelect(exp: Expense) {
    this.selectedExpense = exp;
  }

  //Create
  expenseModel = new Expense();
    createExpense() {
      this.data.storeExpense(this.expenseModel).subscribe(val => console.log(val));
    }

}
