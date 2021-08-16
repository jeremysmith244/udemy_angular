import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../services/github-service.service';

@Component({
  selector: 'follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css']
})
export class FollowerComponent implements OnInit {

  followers: [];

  constructor(private service: GithubServiceService) {
    this.followers = [];
   }

   ngOnInit() {
    this.service.getAll()
      .subscribe(followers => this.followers = followers as any);
   }

   print(follower: any) {
    console.log(follower);
   }

}
