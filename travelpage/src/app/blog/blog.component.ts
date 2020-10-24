import { Component, OnInit } from '@angular/core';
import { entrys } from '../blog-entry';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  entrys = entrys;

  constructor() { }

  ngOnInit(): void {
  }

}
