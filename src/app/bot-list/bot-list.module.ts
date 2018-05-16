import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BotListComponent } from './component/bot-list/bot-list.component';
import { BotService } from './service/bot.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BotListComponent],
  providers: [BotService],
  exports: [BotListComponent]
})
export class BotListModule { }
