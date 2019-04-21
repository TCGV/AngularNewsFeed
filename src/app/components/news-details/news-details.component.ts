import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NewsService, ToolbarService, NewsItemDto, ToolbarType } from '../../modules/services.module';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  id:string;
  date:string;
  title:string;
  summary:string;
  link:string;
  img:string;

  constructor(private route:ActivatedRoute, private newsService:NewsService, private toolbarService:ToolbarService) {
    this.toolbarService.setTitle('');
    this.toolbarService.setToolbarType(ToolbarType.Back);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']; 

      var newsDto = this.newsService.getItem(this.id);
      
      this.date = newsDto.date;
      this.title = newsDto.title;
      this.summary = newsDto.summary;
      this.link = newsDto.link;
      this.img = newsDto.img;
    });
  }

}
