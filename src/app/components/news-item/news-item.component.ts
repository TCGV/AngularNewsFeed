import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { NewsService, NewsItemDto } from '../../modules/services.module';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {

  @Input()
  public newsDto:NewsItemDto;

  constructor(private router:Router, private newsService:NewsService) { }

  ngOnInit() {
  }

  click() {
    this.router.navigate(['news', this.newsDto.id]);
  }

  setBookmark() {
    this.newsService.setBookmark(this.newsDto.id, true);
  }

  clearBookmark() {
    this.newsService.setBookmark(this.newsDto.id, false);
  }

  setNotInterested() {
    this.newsService.setNotInterested(this.newsDto.id, true);
  }

}
