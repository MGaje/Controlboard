import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ElectronService } from 'ngx-electron';

import { TitlebarService } from '../../service/titlebar.service';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.css']
})
export class TitlebarComponent implements OnInit, OnDestroy 
{
  private window: Electron.BrowserWindow;
  private title: string;
  private titleSub: Subscription;

  constructor(private electronService: ElectronService, private titlebarService: TitlebarService) 
  { 
    // Empty.
  }

  public ngOnInit() 
  {
    this.window = this.electronService.remote.getCurrentWindow();
    this.titleSub = this.titlebarService.getTitle().subscribe(title => this.title = title);
  }

  public ngOnDestroy()
  {
    if (this.titleSub)
    {
      this.titleSub.unsubscribe();
    }
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
