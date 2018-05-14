import * as path from 'path';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Bot } from '../../model/Bot';
import { BotService } from '../../service/bot.service';

@Component({
  selector: 'app-launch-bot',
  templateUrl: './launch-bot.component.html',
  styleUrls: ['./launch-bot.component.css']
})
export class LaunchBotComponent implements OnInit, OnDestroy
{
  private bots: Bot[];
  private botSub: Subscription;

  constructor(private botService: BotService) 
  { 
    // Temp.
    // Just so the observable has some data.
    const heraldbot = new Bot();
    heraldbot.setName("HeraldBot");
    heraldbot.setPath("A:\\Projects\\heraldbot\\build\\app.js");

    this.botService.save([heraldbot]);
  }

  public ngOnInit() 
  {
    this.botSub = this.botService.getBots().subscribe(bots => this.bots = bots);
  }

  public ngOnDestroy()
  {
    this.botSub.unsubscribe();
  }

  public launch()
  {
    this.bots[0].launch();
  }

  public close()
  {
    this.bots[0].close("quit");
  }

  public showLaunch()
  {
    if (!this.bots || this.bots.length === 0)
    {
      return false;
    }

    return !this.bots[0].isRunning();
  }

  public showClose()
  {
    if (!this.bots || this.bots.length === 0)
    {
      return false;
    }

    return this.bots[0].isRunning();
  }
}
