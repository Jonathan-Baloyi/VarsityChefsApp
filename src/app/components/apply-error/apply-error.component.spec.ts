import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyErrorComponent } from './apply-error.component';

describe('ApplyErrorComponent', () => {
  let component: ApplyErrorComponent;
  let fixture: ComponentFixture<ApplyErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
