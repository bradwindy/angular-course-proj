import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddableListComponent } from './addable-list.component';

describe('AddableListComponent', () => {
  let component: AddableListComponent;
  let fixture: ComponentFixture<AddableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddableListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
