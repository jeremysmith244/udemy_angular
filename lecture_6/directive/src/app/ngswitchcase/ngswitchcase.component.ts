import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitchcase',
  templateUrl: './ngswitchcase.component.html',
  styleUrls: ['./ngswitchcase.component.css']
})
export class NgswitchcaseComponent {

  viewMode = 'map';

  constructor() { }

  clickMap() {
    this.viewMode = 'map';
  }

  clickList() {
    this.viewMode = 'list'
  }

}
