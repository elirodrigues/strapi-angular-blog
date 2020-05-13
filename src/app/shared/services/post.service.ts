import { Injectable } from '@angular/core';

import { GenericalService } from './generical.service';
import {API_STRAPI} from '../../app.api';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private gServ : GenericalService) { }

  getPosts() {
    let url = `${API_STRAPI}/posts`;
    return this.gServ.get(url);
  }

  getPostByCategoryId(categoryId) {
    let url = `${API_STRAPI}/posts?category.id=${categoryId}`;
    return this.gServ.get(url);
  }

  getPostById(id) {
  	let url = `${API_STRAPI}/posts/${id}`;
    return this.gServ.get(url);
  }

  getFeaturedPost(qt) {
    let url = `${API_STRAPI}/posts?featured=1&_limit=${qt}`;
    return this.gServ.get(url);
  }
}
