import { NgModule } from '@angular/core';
import {MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  imports: [MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule, MatCheckboxModule],
  exports: [MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule, MatCheckboxModule],
})
export class MaterialModule { }