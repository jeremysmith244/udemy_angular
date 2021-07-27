import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

/** @title Select with custom trigger text */
@Component({
  selector: 'zippy',
  templateUrl: 'zippy.component.html',
  styleUrls: ['zippy.component.css'],
})

export class ZippyComponent {

  constructor() {
    this.title = '';
  }
  @Input('title') title: string;
  visible = true;

  toggle() {
    this.visible = !this.visible;
  }
}