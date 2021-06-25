import { Component } from '@angular/core';
import { ChangeEvent } from './favorite/favorite.component';
import { LikeEvent } from './like/like.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true
  }
  likes = {
    numLikes: 42
  }
  onFavoriteChange(eventArgs: ChangeEvent) {
    console.log('favorite changed to ' + eventArgs.newValue);
  }
  onLikeChange(eventArgs: LikeEvent) {
    this.likes.numLikes = eventArgs.numLikes;
  }
}
