import { NgModule } from '@angular/core';
import { MaterialModule } from '../modules/material.module';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';

/* Pages */
import { FeedComponent } from '../components/feed/feed.component';
import { NewsDetailsComponent } from '../components/news-details/news-details.component';
import { SourcesComponent } from '../components/sources/sources.component';
import { AddSourceComponent } from '../components/add-source/add-source.component';
import { SettingsComponent } from '../components/settings/settings.component';

/* Components */
import { HeaderComponent } from '../components/header/header.component';
import { NewsItemComponent } from '../components/news-item/news-item.component';
import { SourceItemComponent } from '../components/source-item/source-item.component';

var _components = [

  FeedComponent,
  NewsDetailsComponent,
  SourcesComponent,
  AddSourceComponent,
  SettingsComponent,

  HeaderComponent,
  NewsItemComponent,
  SourceItemComponent
  
];

@NgModule({
  declarations: _components,
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  exports: _components
})
export class ComponentsModule { }