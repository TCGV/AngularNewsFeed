import { NgModule } from '@angular/core';
import { MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';

var _modules = [ MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule ];

@NgModule({
  imports: _modules,
  exports: _modules,
})
export class MaterialModule { }