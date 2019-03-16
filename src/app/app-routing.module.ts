import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedComponent } from './components/feed/feed.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';

const routes: Routes = [
  { path: '', component: FeedComponent },
  { path: 'news/:id', component: NewsDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
