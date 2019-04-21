import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedComponent } from './components/feed/feed.component';
import { AddSourceComponent } from './components/add-source/add-source.component';
import { SourcesComponent } from './components/sources/sources.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  { path: '', component: FeedComponent },
  { path: 'sources/add', component: AddSourceComponent },
  { path: 'sources', component: SourcesComponent },
  { path: 'news/:id', component: NewsDetailsComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
