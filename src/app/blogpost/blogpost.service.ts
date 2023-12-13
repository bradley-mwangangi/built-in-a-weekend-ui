import { Injectable } from '@angular/core';
import {Blogpost} from "./blogpost";

@Injectable({
  providedIn: 'root'
})
export class BlogpostService {

  url = 'http://localhost:3000/highlights'

  async getTopTenPosts():
  Promise<Blogpost[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getPostById(id: number):
  Promise<Blogpost | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

}
