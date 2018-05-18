import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataStoreService } from './service/data-store.service';
import { TitlebarService } from './service/titlebar.service';

import { TitlebarComponent } from './component/titlebar/titlebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TitlebarComponent
  ],
  exports: [
    TitlebarComponent
  ],
  providers: [
    DataStoreService,
    TitlebarService
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
