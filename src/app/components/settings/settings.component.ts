import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToolbarService, ToolbarType, FeedOrdering } from '../../modules/services.module';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  FeedOrdering:object;
  enableNotifications:boolean;
  feedOrdering:string;
  fontSize:string;

  constructor(private router:Router, private toolbarService:ToolbarService) {
    this.toolbarService.setTitle('Settings');
    this.toolbarService.setToolbarType(ToolbarType.Back);
    this.FeedOrdering = FeedOrdering;
  }

  ngOnInit() {
    this.enableNotifications = false;
    this.feedOrdering = FeedOrdering.Popular.toString();
    this.fontSize = "12";
  }

  change() {
    console.log('enableNotifications:' + this.enableNotifications);
    console.log('feedOrdering:' + this.feedOrdering);
    console.log('fontSize:' + this.fontSize);
  }

  getYear() {
    return new Date().getFullYear();
  }

  getVersion() {
    return "1.0.0";
  }

}
