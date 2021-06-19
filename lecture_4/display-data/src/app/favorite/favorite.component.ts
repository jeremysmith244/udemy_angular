import { Component, OnInit } from '@angular/core';
// Dont forget to npm install bootstrap --save
@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  isFavorite: boolean;
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
  }

  ngOnInit(): void {
  }

}
