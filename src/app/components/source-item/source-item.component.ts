import { Component, OnInit, Input } from '@angular/core';

import { SourceDto } from '../../interfaces/source-dto';

@Component({
  selector: 'app-source-item',
  templateUrl: './source-item.component.html',
  styleUrls: ['./source-item.component.css']
})
export class SourceItemComponent implements OnInit {

  @Input()
  public sourceDto:SourceDto;

  constructor() { }

  ngOnInit() {
  }

}
