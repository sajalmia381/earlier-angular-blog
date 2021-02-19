import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  id: number = null

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(data => {
      console.log(data)
    })
  }

  ngOnInit(): void {
  }

}
