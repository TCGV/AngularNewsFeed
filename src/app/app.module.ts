import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from './modules/material-module';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FeedComponent } from './components/feed/feed.component';
import { SourcesComponent } from './components/sources/sources.component';
import { AddSourceComponent } from './components/add-source/add-source.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { SourceItemComponent } from './components/source-item/source-item.component';

import { NewsService } from './services/news.service';
import { ToolbarService } from './services/toolbar.service';
import { SourcesService } from './services/sources.service';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FeedComponent,
      SourcesComponent,
      AddSourceComponent,
      NewsDetailsComponent,
      NewsItemComponent,
      SourceItemComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      FormsModule,
      MaterialModule
   ],
   providers: [
      NewsService,
      ToolbarService,
      SourcesService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
