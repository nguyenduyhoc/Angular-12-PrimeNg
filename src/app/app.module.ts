import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NotesModule } from './Notes/notes/notes.module';
import { TracNghiemModule } from './trac-nghiem/trac-nghiem.module';
import { UploadFileModule } from './upload-file/upload-file.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NotesModule, TracNghiemModule, UploadFileModule, NgbModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
