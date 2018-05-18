import { Component } from '@angular/core';

import { TitlebarService } from './core/service/titlebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  constructor(private titlebarService: TitlebarService)
  {
    const version: string = require('../../package.json').version;
    this.titlebarService.updateTitle(`Controlboard v${version}`);
  }
}
