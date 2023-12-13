import { Component, inject } from '@angular/core';
import {CommonModule} from "@angular/common";
import {BlogpostComponent} from "../blogpost/blogpost.component";
import {Blogpost} from "../blogpost/blogpost";
import {BlogpostService} from "../blogpost/blogpost.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    BlogpostComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  blogpostList: Blogpost[] = [];
  blogpostService: BlogpostService = inject(BlogpostService);

  constructor() {
    this.blogpostService.getTopTenPosts().then((blogpostList: Blogpost[]) => {
      this.blogpostList = blogpostList;
    });
  }

}
