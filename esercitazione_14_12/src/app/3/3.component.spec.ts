import { ComponentFixture, TestBed } from '@angular/core/testing';

import { 3Component } from './3.component';

describe('3Component', () => {
  let component: 3Component;
  let fixture: ComponentFixture<3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [3Component]
    });
    fixture = TestBed.createComponent(3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
