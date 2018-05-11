import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchBotComponent } from './launch-bot.component';

describe('LaunchBotComponent', () => {
  let component: LaunchBotComponent;
  let fixture: ComponentFixture<LaunchBotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchBotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
