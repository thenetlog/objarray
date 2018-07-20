import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Expense } from '../expense';

@Component({
  selector: 'app-expensef',
  templateUrl: './expensef.component.html',
  styleUrls: ['./expensef.component.scss']
})
export class ExpensefComponent implements OnInit {

  @Input() Select: Expense;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  updateExpense() {
    this.data.upExpense(this.Select)
    .subscribe(val => console.log(val)
  );
  }

}
