import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotConsoleComponent } from './bot-console.component';

describe('BotConsoleComponent', () => {
  let component: BotConsoleComponent;
  let fixture: ComponentFixture<BotConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
