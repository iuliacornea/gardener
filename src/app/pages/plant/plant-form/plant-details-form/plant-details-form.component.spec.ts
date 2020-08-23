import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantDetailsFormComponent } from './plant-details-form.component';

describe('PlantDetailsFormComponent', () => {
  let component: PlantDetailsFormComponent;
  let fixture: ComponentFixture<PlantDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
