import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { BotService } from '../../service/bot.service';
import { Bot } from '../../../core/model/Bot';

@Component({
  selector: 'app-bot-list',
  templateUrl: './bot-list.component.html',
  styleUrls: ['./bot-list.component.css']
})
export class BotListComponent implements OnInit, OnDestroy
{
  public bots: Bot[] = [];
  public selectedBotIndex: number = -1;
  public selectedBotSub: Subscription;

  constructor(private botService: BotService) 
  { }

  public ngOnInit() 
  {
    this.botService.getBots().subscribe(bots => this.bots = bots);
    this.selectedBotSub = this.botService.getSelectedBot().subscribe(selectedBotIndex => this.selectedBotIndex = selectedBotIndex);
  }

  public ngOnDestroy()
  {
    if (this.selectedBotSub)
    {
      this.selectedBotSub.unsubscribe();
    }
  }

  public selectBot(botIndexPosition: number)
  {
    this.botService.setSelectedBot(botIndexPosition);
  }

  public isSelected(botIndexPosition: number)
  {
    return this.selectedBotIndex === botIndexPosition;
  }
}
