import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenhouseStatisticsComponent } from './greenhouse-statistics.component';

describe('GreenhouseStatisticsComponent', () => {
  let component: GreenhouseStatisticsComponent;
  let fixture: ComponentFixture<GreenhouseStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenhouseStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenhouseStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
