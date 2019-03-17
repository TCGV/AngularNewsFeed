import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NewsService } from '../../services/news.service';
import { NewsItemDto } from '../../interfaces/NewsItemDto';

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

  constructor(private route:ActivatedRoute, private newsService:NewsService) { }

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
