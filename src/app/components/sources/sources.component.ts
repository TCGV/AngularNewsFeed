import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToolbarService } from '../../services/toolbar.service';
import { SourcesService } from '../../services/sources.service';

import { ToolbarType } from '../../enums/toolbar-type.enum';
import { SourceDto } from '../../interfaces/SourceDto';

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
