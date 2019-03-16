import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material-module';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FeedComponent } from './components/feed/feed.component';
import { NewsItemComponent } from './components/news-item/news-item.component';

import { NewsService } from './services/news.service';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FeedComponent,
      NewsItemComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MaterialModule
   ],
   providers: [NewsService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
