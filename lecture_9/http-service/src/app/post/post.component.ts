import { Component, OnInit } from '@angular/core';
import { AppError } from '../app-error';
import { BadRequestError } from '../bad-request-error';
import { NotFoundError } from '../not-found-error';
import { PostService } from '../services/post.service';

interface Post {
  id: number,
  userId: number,
  title: string,
  body: string,
  isRead: boolean
}
interface Id {
  id: number
}

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any;

  constructor(private service: PostService) {
    this.posts = [];
    // Constructor in angular should only be used to manage dependency injections
   }

   ngOnInit() {
    this.service.getAll()
      .subscribe(posts => this.posts = posts as Post[]);
   }

   createPost(inputHTML: HTMLInputElement) {

     let post = { 
       id: 0,
       userId: 0, 
       title: inputHTML.value, 
       body: '',
       isRead: false 
      };

    // This is an example of optimistic update, and it appears faster to the user
    this.posts.splice(0, 0, post);

     this.service.create(post)
      .subscribe(
        response => {
          let rePost = response as Id;
          post.id = rePost.id;
          // This is example of pessimistic update, it waits for a server response
          // this.posts.splice(0, 0, post);
        }, 
        (error: AppError) => {
          // This is required, because if call fails, need to delete
          this.posts.splice(0, 1);
          if (error instanceof BadRequestError)
            alert('Bad data submitted');
          else throw error;
        })
   }

   updatePost(inputHTML: HTMLInputElement) {
      let post:any = inputHTML as Object;
      post.isRead = true;
      this.service.update(post as Post);
   }

   deletePost(inputHTML: HTMLInputElement) {
    let post:any = inputHTML as Object;
    let index = this.posts.indexOf(post as Post);
    this.posts.splice(index, 1);

    this.service.delete(post as Post)
      .subscribe(
        () => {
      }, 
      (error: AppError) => {
        this.posts.splice(index, 0, post);
        if (error instanceof NotFoundError)
          alert('This post is already deleted');
        else throw error;
      })
   }

  //  This highlights the lazy nature of observables, as opposed to promises
  //  deletePost(inputHTML: HTMLElement) {
  //   let post:any = inputHTML as Object;
  //   // If you delete subscribe, no call is made, since Observables are lazy
  //    this.service.delete(post.id).subscribe();
  //  }

}
