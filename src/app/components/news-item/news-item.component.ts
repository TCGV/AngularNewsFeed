import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { NewsItemDto } from '../../modules/services.module';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {

  @Input()
  public newsDto:NewsItemDto;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  click() {
    this.router.navigate(['news', this.newsDto.id]);
  }

  bookmark() {
    console.log('bookmark:' + this.newsDto.id);
  }

  notInterested() {
    console.log('notInterested:' + this.newsDto.id);
  }

}
