import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';

const module = [
  CommonModule,
  MessageModule,
  MessagesModule,
  ConfirmDialogModule,
  ToastModule,
  BrowserAnimationsModule,
  MenubarModule,
  InputTextareaModule,
  ButtonModule,
  CardModule,
  SplitterModule,
];

@NgModule({
  declarations: [],
  imports: [...module],
  exports: [...module],
})
export class SharedModule {}
