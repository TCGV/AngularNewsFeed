import { Component, OnInit } from '@angular/core';

import { NewsService } from '../../services/news.service';
import { ToolbarService } from '../../services/toolbar.service';

import { NewsItemDto } from '../../interfaces/NewsItemDto';
import { ToolbarType } from '../../enums/toolbar-type.enum';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  items:NewsItemDto[];

  constructor(private newsService:NewsService, private toolbarService:ToolbarService) {
    this.toolbarService.setToolbarType(ToolbarType.Feed);
  }

  ngOnInit() {
    this.items = this.newsService.getItems();
  }

}
