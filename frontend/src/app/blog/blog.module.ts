import { BlogRoutingModule } from './blog-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
  ],
  declarations: [BlogComponent, BlogDetailComponent]
})
export class BlogModule { }
