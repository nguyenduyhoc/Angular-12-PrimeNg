import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from '../notes/notes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';


@NgModule({
  declarations: [NotesComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, SharedModule],
  exports: [NotesComponent],
  providers:[MessageService]
  
})
export class NotesModule {}
