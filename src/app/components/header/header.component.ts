import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { ToolbarService } from '../../services/toolbar.service';
import { ToolbarType } from '../../enums/toolbar-type.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ToolbarType = ToolbarType;
  title:string;
  toolbarType:ToolbarType;

  constructor(private router:Router, private location: Location, private toolbarService:ToolbarService) {
    toolbarService.subscribeType((c) => {
      this.title = c.title;
      this.toolbarType = c.type;
    } );
  }

  ngOnInit() {
  }

  sources() {
    this.router.navigate(['sources']);
  }

  settings() {
    this.router.navigate(['settings']);
  }

  about() {
    this.router.navigate(['about']);
  }

  back() {
    this.location.back();
  }

}
