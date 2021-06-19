import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses-component.component.html',
  styleUrls: ['./courses-component.component.css']
})
export class CoursesComponentComponent implements OnInit {

  title : string;
  imageUrl : string;
  colSpan: number;
  isActive: boolean;
  isVisible: boolean;
  message: string;
  message2: string;
  message3: string;
  course: any;
  longText: string;

  constructor() {

    this.title = "Bindings and things!";
    this.imageUrl = "http://lorempixel.com/400/200";
    this.colSpan = 2;
    this.isActive = true;
    this.isVisible = false;
    this.message = "enter something";;
    this.message2 = "enter something";;
    this.message3 = "enter something";

    this.course = {
      title: "This is an Angular course",
      rating: 3.5333333,
      students: 42445,
      price: 15,
      releaseDate: new Date(2001, 1, 1)
    }

    this.longText = 'One upon a time, there was a bay chicken. Noone cared about this particular chicken, so the chicken went off doing its own thing. Then, one day some other chicken was like whos this chicken think she is, trying to fly under the radar like some kind of spring chicken. This chicken is no spring chicken';

   }

  // $event is standard event object, and can be customized
  onClick($event: any) {
    this.isActive ? this.isActive = false : this.isActive = true;
    console.log($event);
  }

  onDivClick() {
    console.log("Div was also clicked");
  }

  onClickNoBubbles($event: any) {
    $event.stopPropagation();
    this.isActive ? this.isActive = false : this.isActive = true;
    console.log($event);
  }

  onKeyUp($event: any) {
    this.isVisible = true;
    // This $event.target.value is capturing the text of <input>, standard event handler property
    this.message = $event.target.value;
  }

  cleanerKeyUp(userMessage: any) {
    this.isVisible = true;
    // This $event.target.value is capturing the text of <input>, standard event handler property
    this.message2 = userMessage.value;
  }

  twoWayKeyUp() {
    this.isVisible = true;
  } 

  ngOnInit(): void {
  }

}
