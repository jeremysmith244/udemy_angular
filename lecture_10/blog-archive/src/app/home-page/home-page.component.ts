import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  dates: string[];

  constructor() { 
    this.dates = [
      '2021-08-30', 
      '2021-08-31', 
      '2021-08-32',
      '2021-09-01'
    ];
  }

  ngOnInit(): void {

  }

}
