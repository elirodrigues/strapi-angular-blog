import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {PostService} from '../shared/services/post.service';
import {Post} from '../shared/model/post.model';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  post : Post;
 
  constructor(private route: ActivatedRoute,
  			      private postService : PostService) { }

  ngOnInit() {

    //Reads a post
  	this.route.params.subscribe(params => {
	  	this.postService.getPostById(params['postId']).subscribe((data: Post)=>{
	  		this.post = data;
	  	})
	  })
   }

}
