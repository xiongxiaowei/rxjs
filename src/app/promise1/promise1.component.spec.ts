import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Promise1Component } from './promise1.component';

describe('Promise1Component', () => {
  let component: Promise1Component;
  let fixture: ComponentFixture<Promise1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Promise1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Promise1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
