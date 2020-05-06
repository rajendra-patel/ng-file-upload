import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFileUploadComponent } from './ng-file-upload.component';

@NgModule({
  declarations: [NgFileUploadComponent],
  imports: [
    CommonModule
  ],
  exports: [NgFileUploadComponent]
})
export class NgFileUploadModule { }
