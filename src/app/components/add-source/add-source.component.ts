import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ToolbarService, SourcesService, ToolbarType } from '../../modules/services.module';

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
