import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'udemy-course',
  templateUrl: './udemy-course.component.html',
  styleUrls: ['./udemy-course.component.css']
})
export class UdemyCourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  courseOptions = [
    { id: 1, name: "Physics" },
    { id: 2, name: "Chemistry" },
    { id: 3, name: "Maths"}
  ];

}
