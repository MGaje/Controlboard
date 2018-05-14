import { Component, OnInit } from '@angular/core';

import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.css']
})
export class TitlebarComponent implements OnInit 
{
  private window: Electron.BrowserWindow;

  constructor(private electronService: ElectronService) 
  { 
    // Empty.
  }

  public ngOnInit() 
  {
    this.window = this.electronService.remote.getCurrentWindow();
  }

  public minimize()
  {
    this.window.minimize();
  }

  public restore()
  {
    this.window.restore();
  }

  public maximize()
  {
    this.window.maximize();
  }

  public close()
  {
    this.window.close();
  }

  public isMaximized()
  {
    return this.window.isMaximized();
  }
}
