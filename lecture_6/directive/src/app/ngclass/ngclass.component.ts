import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
// Dont forget to npm install bootstrap --save
@Component({
  selector: 'favorite',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css'],
  // This is called shadow DOM, and is important to prevent css from leaking
  // for example, say i define .glyphicon color style here. If that just
  // introduced a new <style> this would apply to all glyphicons
  // Angular does this by default! so you dont have to remember to add this
  encapsulation: ViewEncapsulation.Emulated
})
export class NgclassComponent {

  // This decorator is required for property binding to this element
  // is-fav is called an alias of isFavorite, it is hugely important,
  // since this will hold contract of this component with outside world
  @Input('is-fav') isFavorite: boolean;
  // This defines a signal which gets sent inside
  // onClick method
  @Output('change') click = new EventEmitter();

  constructor() { 
    this.isFavorite = false;
  }

  getClass() {
    if (this.isFavorite)
      return "glyphicon glyphicon-star";
    return "glyphicon glyphicon-star-empty";
  }

  onClick() {
    this.isFavorite? this.isFavorite = false : this.isFavorite = true;
    this.click.emit({ newValue: this.isFavorite });
  }

}
// This defines the interface for the change event
export interface ChangeEvent {
  newValue: boolean;
}
