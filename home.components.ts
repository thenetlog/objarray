import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface myData {
  obj: Object;
  key: string;
  value: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  incomes: any = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getIncomes().subscribe(
      data => this.incomes = data.data
    );
  }
}
