import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerTimeComponent } from './dinner-time.component';

describe('DinnerTimeComponent', () => {
  let component: DinnerTimeComponent;
  let fixture: ComponentFixture<DinnerTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinnerTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinnerTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
