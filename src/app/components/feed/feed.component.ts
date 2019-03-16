import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { NewsItemDto } from '../../interfaces/NewsItemDto';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  items:NewsItemDto[];

  constructor(private newsService:NewsService) {

  }

  ngOnInit() {
    this.items = this.newsService.getItems();
  }

}
