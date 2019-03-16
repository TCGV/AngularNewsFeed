import { Component, OnInit, Input } from '@angular/core';
import { NewsItemDto } from '../../interfaces/NewsItemDto';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  date:string;
  title:string;
  summary:string;
  link:string;
  img:string;

  @Input()
  public newsDto:NewsItemDto;

  constructor() { }

  ngOnInit() {
    this.date = this.newsDto.date;
    this.title = this.newsDto.title;
    this.summary = this.newsDto.summary;
    this.link = this.newsDto.link;
    this.img = this.newsDto.img;
  }

}
