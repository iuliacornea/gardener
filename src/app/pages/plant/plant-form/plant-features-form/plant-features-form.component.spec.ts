import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantFeaturesFormComponent } from './plant-features-form.component';

describe('PlantFormComponent', () => {
  let component: PlantFeaturesFormComponent;
  let fixture: ComponentFixture<PlantFeaturesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantFeaturesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantFeaturesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
