import { Component, OnInit } from '@angular/core';
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
  toolbarType:ToolbarType;

  constructor(private toolbarService:ToolbarService, private location: Location) {
    toolbarService.subscribeType((t) => { this.toolbarType = t; } );
  }

  ngOnInit() {
  }

  back() {
    this.location.back();
  }

}
