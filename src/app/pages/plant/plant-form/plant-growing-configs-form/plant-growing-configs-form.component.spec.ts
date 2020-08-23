import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantGrowingConfigsFormComponent } from './plant-growing-configs-form.component';

describe('PlantGrowingConfigsFormComponent', () => {
  let component: PlantGrowingConfigsFormComponent;
  let fixture: ComponentFixture<PlantGrowingConfigsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantGrowingConfigsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantGrowingConfigsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
