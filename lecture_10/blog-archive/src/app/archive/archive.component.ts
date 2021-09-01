import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  date: string | null;
  constructor(
    private route: ActivatedRoute,
    private router: Router) 
    { this.date = '';}

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.date = params.get('date');
      })
  }

  return() {
    this.router.navigate(['../']);
  }

}
