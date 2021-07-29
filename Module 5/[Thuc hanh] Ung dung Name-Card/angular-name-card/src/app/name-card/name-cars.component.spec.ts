import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameCarsComponent } from './name-cars.component';

describe('NameCarsComponent', () => {
  let component: NameCarsComponent;
  let fixture: ComponentFixture<NameCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
