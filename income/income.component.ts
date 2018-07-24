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
  //for toggle()
  public Update: boolean = false;
  public incomef: any = 'Update';

  @Input() income: Income;
  selectedIncome: any = {};

  constructor(private data: DataService) {
   }

   //for income edit form
   toggle() {
    this.Update = !this.Update;
    if(this.Update)  
      this.incomef = "Hide Form";
    else
      this.incomef = "Update";
  }

  //Read
  ngOnInit() {
    this.data.getIncomes().subscribe(
      (data: any) => {this.incomes$ = data.data;},
      err => console.error(err),
      () => console.log('done loading'),
    );
  }

  //select
  onSelect(inc: Income) {
    this.selectedIncome = inc;
  }

  //Create
  incomeModel = new Income();
  createIncome() {
    this.data.storeIncome(this.incomeModel).subscribe(val => console.log(val));
  }

  //Delete
  deIncome(incomeID): void {
    var ans = confirm("Do you want to delete this Id: " + incomeID);
    if(ans){
      this.data.deIncome(incomeID).subscribe(
        val => console.log(val)
      );
    }
  }

}
