import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlebarComponent } from './component/titlebar/titlebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TitlebarComponent],
  exports: [TitlebarComponent]
})
export class WindowControlsModule { }
