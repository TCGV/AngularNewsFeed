import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ToolbarService } from '../../services/toolbar.service';
import { SourcesService } from '../../services/sources.service';

import { ToolbarType } from '../../enums/toolbar-type.enum';

@Component({
  selector: 'app-add-source',
  templateUrl: './add-source.component.html',
  styleUrls: ['./add-source.component.css']
})
export class AddSourceComponent implements OnInit {
  url:string;

  constructor(private location: Location, private toolbarService:ToolbarService, private sourcesService:SourcesService) {
    this.toolbarService.setTitle('Add Source');
    this.toolbarService.setToolbarType(ToolbarType.Back);
  }

  ngOnInit() {
  }

  onSubmit() {
    this.sourcesService.add(this.url);
    this.location.back();
  }

}
