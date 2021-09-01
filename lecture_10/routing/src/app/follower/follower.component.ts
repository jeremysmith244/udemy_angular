import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubServiceService } from '../services/github-service.service';
import { combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css']
})
export class FollowerComponent implements OnInit {

  followers: [];

  constructor(
    private route: ActivatedRoute,
    private service: GithubServiceService) {
    this.followers = [];
   }

   ngOnInit() {

    combineLatest([
      this.route.paramMap, 
      this.route.queryParamMap
    ])
    .pipe(
      switchMap(combineParams => {
        let id = combineParams[0].get('id');
        let page = combineParams[1].get('page');
        return this.service.getAll();
      })
    )
    .subscribe(followers => this.followers = followers as any);

    // Mosh hates subscribe inside subscribe, but i think its waaaay less confusing than above...
    // .subscribe(combineParams => {
    //   let id = combineParams[0].get('id');
    //   let page = combineParams[1].get('page');

    //   // Here one would use the information above to modify this initializer...
    //   this.service.getAll()
    //     .subscribe(followers => this.followers = followers as any);
    // })
   }

   print(follower: any) {
    console.log(follower);
   }

}
