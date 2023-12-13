import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";
import {Blogpost} from "./blogpost";

@Component({
  selector: 'app-blogpost',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './blogpost.component.html',
  styleUrl: './blogpost.component.css'
})

export class BlogpostComponent {
  @Input() blogpost!: Blogpost;
}
