import { Component, OnInit } from '@angular/core';

import { BotService } from '../../service/bot.service';
import { Bot } from '../../model/Bot';

@Component({
  selector: 'app-bot-list',
  templateUrl: './bot-list.component.html',
  styleUrls: ['./bot-list.component.css']
})
export class BotListComponent implements OnInit
{
  public bots: Bot[] = [];

  constructor(private botService: BotService) 
  { }

  public ngOnInit() 
  {
    this.botService.getBots().subscribe(bots => this.bots = bots);
  }
}
