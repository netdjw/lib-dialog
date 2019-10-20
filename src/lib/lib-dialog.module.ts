import { NgModule } from '@angular/core';
import { LibDialogComponent } from './lib-dialog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LibDialogComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [LibDialogComponent]
})
export class LibDialogModule { }
