import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import { BlogGridComponent } from './blog-grid/blog-grid.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';
import { BlogHeaderComponent } from './blog-header/blog-header.component';
import { BlogFooterComponent } from './blog-footer/blog-footer.component';

@NgModule({
  exports: [HttpClientModule],
  declarations: [
    AppComponent,
    BlogGridComponent,
    BlogPostComponent,
    BlogSidebarComponent,
    BlogHeaderComponent,
    BlogFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
