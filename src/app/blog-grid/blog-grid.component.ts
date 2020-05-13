import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {PostService} from '../shared/services/post.service';
import {Post} from '../shared/model/post.model';

@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrls: ['./blog-grid.component.css']
})
export class BlogGridComponent implements OnInit {

  featuredPost : Post;
  categoryId : any;
  posts : Array<Post>;
 
  constructor(private route: ActivatedRoute,
              private postService : PostService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {

      //get the featured post
      this.postService.getFeaturedPost(1).subscribe((data : Post) =>{
        this.featuredPost = data;
      })
      
      // if there a category, filter by it
      if (params['categoryId']) {
         this.postService.getPostByCategoryId(params['categoryId']).subscribe((data: Array<Post>)=>{
            this.posts = data;
          })  
      } else { // otherwise, gets all posts
          this.postService.getPosts().subscribe((data: Array<Post>)=>{
             this.posts = data;
          }) 
      }
      
    })

  	

    
  }



}
