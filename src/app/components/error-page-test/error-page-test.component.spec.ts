import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPageTestComponent } from './error-page-test.component';

describe('ErrorPageTestComponent', () => {
  let component: ErrorPageTestComponent;
  let fixture: ComponentFixture<ErrorPageTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorPageTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPageTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
