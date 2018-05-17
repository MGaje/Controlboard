import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataStoreService } from './service/data-store.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    DataStoreService
  ]
})
export class CoreModule 
{ 
  constructor(@Optional() @SkipSelf() parentModule: CoreModule)
  {
    if (parentModule)
    {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}