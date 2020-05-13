import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogGridComponent} from './blog-grid/blog-grid.component';
import {BlogPostComponent} from './blog-post/blog-post.component';

const routes: Routes = [
	  { 
        path: '', 
        component: BlogGridComponent
    },
    { 
        path: ':categoryId', 
        component: BlogGridComponent
    },
    { 
        path: 'blog-post', 
        component: BlogPostComponent
    },
    {
      path: 'blog-post/:postId', 
      component : BlogPostComponent,
    },
];
	
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
