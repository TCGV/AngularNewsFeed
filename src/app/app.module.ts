import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material-module';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FeedComponent } from './components/feed/feed.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';

import { NewsService } from './services/news.service';
import { ToolbarService } from './services/toolbar.service';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FeedComponent,
      NewsItemComponent,
      NewsDetailsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MaterialModule
   ],
   providers: [
      NewsService,
      ToolbarService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
