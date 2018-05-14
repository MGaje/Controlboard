import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchBotComponent } from './component/launch-bot/launch-bot.component';
import { BotService } from './service/bot.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LaunchBotComponent],
  exports: [LaunchBotComponent],
  providers: [BotService]
})
export class LaunchModule 
{ }
