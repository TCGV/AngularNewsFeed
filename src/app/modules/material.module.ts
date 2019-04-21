import { NgModule } from '@angular/core';
import { MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule, MatSelectModule } from '@angular/material';

var _modules = [ MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule, MatSelectModule ];

@NgModule({
  imports: _modules,
  exports: _modules,
})
export class MaterialModule { }