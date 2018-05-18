import * as fs from 'fs';
import * as path from 'path';

import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators/tap';
import { filter } from 'rxjs/operators/filter';
import { take } from 'rxjs/operators/take';

import { DataStoreKey } from '../../core/constants';
import { DataStoreService } from '../../core/service/data-store.service';
import { Bot } from '../../core/model/Bot';

@Injectable()
export class BotService 
{
  private readonly botsFile: string = "./dist/assets/bots.json";

  constructor(private zone: NgZone, private dataStore: DataStoreService) 
  { 
    // Empty.
  }

  public getBots(): Observable<Bot[]>
  {
    // Check to see if the bot config was already loaded.
    if (!this.dataStore.has(DataStoreKey.Bots))
    {
      // Read local config file to get the list of bots.
      fs.readFile(this.botsFile, 'utf8', (err, data) => {
        if (err)
        {
          throw err;
        }

        const botData: any[] = JSON.parse(data);

        // Update the bots in such a way that Angular change detection will pick it up.
        this.zone.run(() => this.dataStore.set(DataStoreKey.Bots, botData.map(x => new Bot(x))));
      });
    }

    // Load bots from the config file.
    return this.dataStore.get(DataStoreKey.Bots).asObservable()
      .pipe(
        filter(x => x !== undefined),
        take(1)
      );
  }

  public setSelectedBot(selectedBotIndex: number)
  {
    this.dataStore.set(DataStoreKey.SelectedBot, selectedBotIndex);
  }

  public getSelectedBot(): Observable<number>
  {
    return this.dataStore.get(DataStoreKey.SelectedBot).asObservable()
      .pipe(
        filter(x => x !== undefined)
      );
  }
}
