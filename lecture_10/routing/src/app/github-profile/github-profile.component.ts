import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        let name = params.get('username');
        console.log(name);
      })

      // Above is an observable, if you only want a static pbject use this
      // this.route.snapshot.paramMap.get('username');
  }

  submit() {
    this.router.navigate(['/followers', {
      queryParams: { page: 1, order: 'newest'}
    }])
  }

}
