import { Component, OnInit } from '@angular/core';

import { NewsService, ToolbarService, NewsItemDto, ToolbarType } from '../../modules/services.module';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  items:NewsItemDto[];

  constructor(private newsService:NewsService, private toolbarService:ToolbarService) {
    this.toolbarService.setToolbarType(ToolbarType.Main);
  }

  ngOnInit() {
    this.items = this.newsService.getItems();
  }

}
