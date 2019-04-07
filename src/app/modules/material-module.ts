import { NgModule } from '@angular/core';
import {MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule  } from '@angular/material';

@NgModule({
  imports: [MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule  ],
  exports: [MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule  ],
})
export class MaterialModule { }