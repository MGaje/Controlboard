import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators/switchMap';
import { map } from 'rxjs/operators/map';
import { filter } from 'rxjs/operators/filter';

import { DataStoreKey } from '../../core/constants';
import { DataStoreService } from '../../core/service/data-store.service';
import { Bot } from '../../core/model/Bot';

@Injectable()
export class DetailsService 
{
  constructor(private dataStore: DataStoreService) 
  { 
    // Empty.
  }

  public getSelectedBot(): Observable<Bot>
  {
    return this.dataStore.get(DataStoreKey.Bots)
      .pipe(
        filter(x => x !== undefined),
        switchMap(bots => {
          return this.dataStore.get(DataStoreKey.SelectedBot)
            .pipe(
              filter(x => x !== undefined),
              map(selectedBotIndex => bots[selectedBotIndex])
            )
        })
      );
  }
}
