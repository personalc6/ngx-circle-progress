import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PureCircleProgressComponent } from './pure-circle-progress.component';

describe('PureCircleProgressComponent', () => {
  let component: PureCircleProgressComponent;
  let fixture: ComponentFixture<PureCircleProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PureCircleProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureCircleProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
