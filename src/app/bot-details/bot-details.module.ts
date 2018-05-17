import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotDetailsComponent } from './component/bot-details/bot-details.component';
import { BotLaunchComponent } from './component/bot-launch/bot-launch.component';
import { DetailsService } from './service/details.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BotDetailsComponent, BotLaunchComponent],
  exports: [BotDetailsComponent],
  providers: [DetailsService]
})
export class BotDetailsModule { }
