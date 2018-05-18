import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { filter } from 'rxjs/operators/filter';

import { DataStoreService } from './data-store.service';
import { DataStoreKey } from '../constants';

@Injectable()
export class TitlebarService 
{
  constructor(private dataStore: DataStoreService) 
  { 
    // Empty.
  }

  public updateTitle(newTitle: string)
  {
    this.dataStore.set(DataStoreKey.Title, newTitle);
  }

  public getTitle(): Observable<string>
  {
    return this.dataStore.get(DataStoreKey.Title).asObservable()
      .pipe(
        filter(x => x !== undefined)
      );
  }
}
