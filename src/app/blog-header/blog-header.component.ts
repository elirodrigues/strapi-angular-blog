import { Component, OnInit } from '@angular/core';


import {CategoryService} from '../shared/services/category.service';
import {Category} from '../shared/model/category.model';

import {PostService} from '../shared/services/post.service';
import {Post} from '../shared/model/post.model';


@Component({
  selector: 'app-blog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.css']
})
export class BlogHeaderComponent implements OnInit {

  categories : Array<Category>;

  constructor(private categoryService : CategoryService) { }

  ngOnInit() {
  	this.categoryService.getCategories().subscribe((data: Array<Category>)=>{
  		this.categories = data;
  	})
  }

}
