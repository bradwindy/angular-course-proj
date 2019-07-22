import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCardComponent } from './switch-card.component';

describe('SwitchCardComponent', () => {
  let component: SwitchCardComponent;
  let fixture: ComponentFixture<SwitchCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
