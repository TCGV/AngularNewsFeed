import { Component, OnInit } from '@angular/core';

import { NewsService, ToolbarService, NewsItemDto, ToolbarType, FeedFilter } from '../../modules/services.module';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  allItems:NewsItemDto[];
  bookmarkedItems:NewsItemDto[];

  constructor(private newsService:NewsService, private toolbarService:ToolbarService) {
    this.toolbarService.setToolbarType(ToolbarType.Main);
  }

  ngOnInit() {
    this.allItems = this.newsService.getItems(FeedFilter.All);
    this.bookmarkedItems = this.newsService.getItems(FeedFilter.Bookmarked);
    this.newsService.subscribeToItemChange(v => this.itemChanged(v));
  }

  itemChanged(item:NewsItemDto) {

    this.removeItem(item, this.bookmarkedItems);
    if (item.bookmarked) {
      this.bookmarkedItems.push(item);
    }
    
    if (item.notInterested) {
      this.removeItem(item, this.allItems);
      this.removeItem(item, this.bookmarkedItems);
    }
    
  }

  removeItem(item:NewsItemDto, from:NewsItemDto[]) {
    for (var i = 0; i < from.length; i++){
      if (from[i].id == item.id) {
        from.splice(i, 1);
        break;
      }
    }
  }

}
