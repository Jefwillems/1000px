import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { BlogService } from '../../shared/services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.scss']
})
export class BlogAddComponent implements OnInit {

  public blogpost: FormGroup;
  public errorMsg: string;


  constructor(
    private bs: BlogService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.blogpost = this.fb.group({
      title: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      text: ['', Validators.required]
    });
  }

  submit($event) {
    const title = this.blogpost.value.title;
    const text = this.blogpost.value.text;
    this.bs.uploadPost(title, text).subscribe(post => {
      if (post.id && post.title && post.text) {
        this.router.navigate(['/blog']);
      } else {
        this.router.navigate(['/blog/add']);
      }
    });
  }

}
