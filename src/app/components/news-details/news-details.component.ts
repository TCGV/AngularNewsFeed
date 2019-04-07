import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NewsService } from '../../services/news.service';
import { ToolbarService } from '../../services/toolbar.service';

import { NewsItemDto } from '../../interfaces/news-item-dto';
import { ToolbarType } from '../../enums/toolbar-type.enum';

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
