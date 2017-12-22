import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatGridListModule, MatIconModule, MatCardModule, 
  MatSidenavModule,
  MatProgressSpinnerModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatGridListModule, MatIconModule, MatCardModule,
    MatSidenavModule, MatProgressSpinnerModule
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatGridListModule, MatIconModule, MatCardModule,
    MatSidenavModule, MatProgressSpinnerModule],
  declarations: []
})
export class MaterialModule { }
