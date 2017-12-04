import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {

  public text: String;

  constructor() { }

  ngOnInit() {
    this.text = `## Hello world

    * this is a test`;
  }

}
