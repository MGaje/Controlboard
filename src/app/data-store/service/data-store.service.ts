import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

/*
 * TODO: Refactor this so it no longer uses 'any'.
 * Add generics!
 */

@Injectable()
export class DataStoreService 
{
  private data: Map<string, BehaviorSubject<any>>;

  constructor() 
  { 
    this.data = new Map<string, BehaviorSubject<any>>();
  }

  public get(key: string): BehaviorSubject<any>
  {
    if (!this.has(key))
    {
      this.data.set(key, new BehaviorSubject<any>(undefined));
    }
    
    return this.data.get(key);
  }

  public set(key: string, value: any)
  {
    if (this.has(key))
    {
      this.data.get(key).next(value);
    }
    else
    {
      this.data.set(key, new BehaviorSubject<any>(value));
    }
  }

  public has(key: string): boolean
  {
    return this.data.has(key);
  }

  public delete(key: string)
  {
    this.data.delete(key);
  }
}
