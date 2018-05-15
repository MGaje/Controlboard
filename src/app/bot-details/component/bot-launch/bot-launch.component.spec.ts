import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotLaunchComponent } from './bot-launch.component';

describe('BotLaunchComponent', () => {
  let component: BotLaunchComponent;
  let fixture: ComponentFixture<BotLaunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotLaunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
