import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Bot } from '../model/Bot';
import { DataStoreService } from '../../core/service/data-store.service';

@Injectable()
export class BotService 
{
  constructor(private dataStore: DataStoreService) 
  { }

  public save(bots: Bot[])
  {
    if (this.dataStore.has("bots"))
    {
      this.dataStore.get("bots").next(bots);
    }
    else
    {
      this.dataStore.set("bots", bots);
    }
  }

  public getBots(): Observable<Bot[]>
  {
    return this.dataStore.get("bots").asObservable();
  }
}
