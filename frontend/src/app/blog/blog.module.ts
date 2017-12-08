import { BlogRoutingModule } from './blog-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { MarkdownPipe } from '../shared/pipes/markdown.pipe';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogService } from '../shared/services/blog.service';
import { BlogResolver } from './blog-detail/blog-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [BlogComponent, BlogDetailComponent, MarkdownPipe, BlogAddComponent],
  providers: [BlogService, BlogResolver]
})
export class BlogModule { }
