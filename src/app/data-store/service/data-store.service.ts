import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

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
    return this.data.get(key);
  }

  public set(key: string, value: any)
  {
    this.data.set(key, new BehaviorSubject(value));
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
