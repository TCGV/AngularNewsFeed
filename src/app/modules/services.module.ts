import { NgModule } from '@angular/core';

import { NewsService } from '../services/news.service';
import { ToolbarService } from '../services/toolbar.service';
import { SourcesService } from '../services/sources.service';

export * from '../services/news.service';
export * from '../services/toolbar.service';
export * from '../services/sources.service';

export * from '../enums/toolbar-type.enum';
export * from '../enums/feed-filter.enum';
export * from '../enums/feed-ordering.enum';

export * from '../interfaces/news-item-dto';
export * from '../interfaces/source-dto';
export * from '../interfaces/toolbar-config';

var _services = [
  NewsService,
  ToolbarService,
  SourcesService
];

@NgModule({
  providers: _services
})
export class ServicesModule { }