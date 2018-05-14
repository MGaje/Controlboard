import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxElectronModule } from 'ngx-electron';

import { WindowControlsModule } from './window-controls/window-controls.module';
import { DataStoreModule } from './data-store/data-store.module';
import { LaunchModule } from './launch/launch.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxElectronModule,
    WindowControlsModule,
    DataStoreModule,
    LaunchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule 
{ }
