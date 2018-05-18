import { Component, OnInit } from '@angular/core';

import { Bot } from '../../../core/model/Bot';
import { DetailsService } from '../../service/details.service';

@Component({
  selector: 'app-bot-details',
  templateUrl: './bot-details.component.html',
  styleUrls: ['./bot-details.component.css']
})
export class BotDetailsComponent implements OnInit 
{
  public selectedBot: Bot = null;

  constructor(private detailsService: DetailsService) 
  { 
    // Empty.
  }

  public ngOnInit() 
  {
    this.detailsService.getSelectedBot().subscribe(selectedBot => this.selectedBot = selectedBot);
  }
}
