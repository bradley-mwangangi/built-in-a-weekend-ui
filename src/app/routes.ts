import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {BlogpostDetailsComponent} from "./blogpost/blogpost-details/blogpost-details.component";

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'posts/:id',
    component: BlogpostDetailsComponent,
    title: 'Blogpost details'
  }
];

export default routeConfig;
