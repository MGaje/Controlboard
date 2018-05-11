import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataStoreService } from './service/data-store.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [DataStoreService]
})
export class DataStoreModule 
{ }
