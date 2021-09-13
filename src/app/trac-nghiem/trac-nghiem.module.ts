import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TracNghiemComponent } from './trac-nghiem/trac-nghiem.component';

@NgModule({
  declarations: [TracNghiemComponent],
  exports: [TracNghiemComponent],
  imports: [CommonModule],
})
export class TracNghiemModule {}
