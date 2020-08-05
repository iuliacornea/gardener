import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantIdentificationComponent } from './plant-identification.component';

describe('PlantIdentificationComponent', () => {
  let component: PlantIdentificationComponent;
  let fixture: ComponentFixture<PlantIdentificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantIdentificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
