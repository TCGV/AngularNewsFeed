import { NgModule } from '@angular/core';

import { NewsService } from '../services/news.service';
import { ToolbarService } from '../services/toolbar.service';
import { SourcesService } from '../services/sources.service';

var _services = [
  NewsService,
  ToolbarService,
  SourcesService
];

@NgModule({
  providers: _services
})
export class ServicesModule { }