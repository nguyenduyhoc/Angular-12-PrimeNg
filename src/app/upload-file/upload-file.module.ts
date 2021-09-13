import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload/upload.component';
import { FileUploadModule } from "ng2-file-upload"; 


@NgModule({
  declarations: [UploadComponent],
  exports: [UploadComponent],
  imports: [CommonModule, FileUploadModule],
})
export class UploadFileModule {}
