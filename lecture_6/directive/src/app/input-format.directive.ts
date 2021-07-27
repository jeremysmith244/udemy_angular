import { Directive, ElementRef, Host, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  // Since this has same name as selector, and is set to @Input()
  // it is passed when you assign [appInputFormat] directive
  @Input('appInputFormat') format: string;
  
  constructor(private el: ElementRef) { 
    // ElementRef is angular reference to DOM elements
    this.format = 'uppercase';
   }

  //  blur is when one clicks away from the element
  // HostListener subscribes to events of the host DOM object
  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;
    if (this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else
      this.el.nativeElement.value = value.toUpperCase();
  }

}
