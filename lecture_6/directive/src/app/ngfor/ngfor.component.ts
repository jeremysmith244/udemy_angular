import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
  
  courses = [
    {id: 0, name: 'course'},
  ]

  constructor() {
   }

  ngOnInit(): void {
  }

  addCourse(userCourse: any) {
    let ids : number[] = [];
    let newId: number;
    this.courses.forEach(element => ids.push(element.id));
    newId = Math.max(...ids) + 1;
    this.courses.push( {id: newId, name: userCourse.value} )
  }

  onRemove(course: any) {
    // Find the matching id in course for course
    let index = this.courses.indexOf(course);
    // splice 1 entry out at index
    this.courses.splice(index, 1);
  }

  loadCourses() {
    this.courses = [
      {id: 1, name: 'course1'},
      {id: 2, name: 'course2'},
      {id: 3, name: 'course3'},
    ]
  }

  trackCourse(index: number, course: any) {
    return course ? course.id : undefined;
  }

}
