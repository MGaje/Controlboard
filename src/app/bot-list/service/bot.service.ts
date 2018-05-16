import * as fs from 'fs';
import * as path from 'path';

import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators/tap';
import { filter } from 'rxjs/operators/filter';
import { take } from 'rxjs/operators/take';

import { DataStoreService } from '../../data-store/service/data-store.service';
import { Bot } from '../model/Bot';

@Injectable()
export class BotService 
{
  private readonly botsFile: string = "./dist/assets/bots.json";
  private readonly botsKey: string = "ds-bots";

  constructor(private zone: NgZone, private dataStore: DataStoreService) 
  { 
    // Empty.
  }

  public getBots(): Observable<Bot[]>
  {
    // Check to see if the bot config was already loaded.
    if (!this.dataStore.has(this.botsKey))
    {
      // Read local config file to get the list of bots.
      fs.readFile(this.botsFile, 'utf8', (err, data) => {
        if (err)
        {
          throw err;
        }

        const botData: any[] = JSON.parse(data);

        // Update the bots in such a way that Angular change detection will pick it up.
        this.zone.run(() => this.dataStore.set(this.botsKey, botData.map(x => new Bot(x))));
      });
    }

    // Load bots from the config file.
    return this.dataStore.get(this.botsKey).asObservable()
      .pipe(
        filter(bots => bots !== undefined),
        take(1)
      );
  }
}
