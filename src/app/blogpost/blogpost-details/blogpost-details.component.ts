import { Component, inject } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BlogpostService} from "../blogpost.service";
import {Blogpost} from "../blogpost";

@Component({
  selector: 'app-blogpost-details',
  standalone: true,
  imports: [],
  templateUrl: './blogpost-details.component.html',
  styleUrl: './blogpost-details.component.css'
})

export class BlogpostDetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  blogpostService= inject(BlogpostService);
  blogpost: Blogpost | undefined;

  constructor() {
    const blogpostId = parseInt(this.route.snapshot.params['id'], 10);
    this.blogpostService.getPostById(blogpostId).then(blogpost => {
      this.blogpost = blogpost;
    })
  }

}
