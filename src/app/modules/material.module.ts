import { NgModule } from '@angular/core';
import { MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule, MatSelectModule, MatButtonToggleModule, MatTabsModule } from '@angular/material';

var _modules = [ MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule, MatSelectModule, MatButtonToggleModule, MatTabsModule ];

@NgModule({
  imports: _modules,
  exports: _modules,
})
export class MaterialModule { }