import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToolbarService, SourcesService, ToolbarType, SourceDto } from '../../modules/services.module';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})
export class SourcesComponent implements OnInit {
  sources:SourceDto[];

  constructor(private router:Router, private toolbarService:ToolbarService, private sourcesService:SourcesService) {
    this.toolbarService.setTitle('Sources');
    this.toolbarService.setToolbarType(ToolbarType.Back);
    this.sources = this.sourcesService.getAll();
  }

  ngOnInit() {
  }

  addSource() {
    this.router.navigate(['sources', 'add']);
  }

}
