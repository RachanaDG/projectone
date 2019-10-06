import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { errorComponent1 } from './error.component';

describe('errorComponent1', () => {
  let component: errorComponent1;
  let fixture: ComponentFixture<errorComponent1>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ errorComponent1 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(errorComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
