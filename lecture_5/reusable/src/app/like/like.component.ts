import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})

export class LikeComponent {

  isLiked: boolean;
  @Input('num-likes') numLikes: number;
  @Output('change') click = new EventEmitter();

  constructor() {
    this.numLikes = 0;
    this.isLiked = false;
   }

  getStyles() {
    return (this.isLiked) ? 'deeppink' : 'darkgrey';
  }

  onClick() {
    this.numLikes += (this.isLiked) ? -1 : 1;
    this.isLiked = !this.isLiked;
    this.click.emit({ numLikes:this.numLikes });
  }
}

export interface LikeEvent {
  numLikes: number;
}