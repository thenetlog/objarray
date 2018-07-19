import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
//import { Observable } from 'rxjs';
import { Income } from '../income';
import { Location } from '@angular/common';

@Component({
  selector: 'app-incomef',
  templateUrl: './incomef.component.html',
  styleUrls: ['./incomef.component.scss']
})
export class IncomefComponent implements OnInit
{

  @Input() Select: Income;

  constructor(private route: ActivatedRoute, 
              private data: DataService, 
              private location: Location){ }

  ngOnInit(){
  }

  goBack(): void {
    this.location.back();
  }

  updateIncome() {
    this.data.upIncome(this.Select).subscribe(val => console.log(val));
  }

}
