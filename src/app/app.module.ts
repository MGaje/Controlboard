import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxElectronModule } from 'ngx-electron';

import { CoreModule } from './core/core.module';
import { BotListModule } from './bot-list/bot-list.module';
import { BotDetailsModule } from './bot-details/bot-details.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxElectronModule,
    CoreModule,
    BotListModule,
    BotDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule 
{ }
