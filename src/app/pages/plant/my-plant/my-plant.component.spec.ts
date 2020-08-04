import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlantComponent } from './my-plant.component';

describe('MyPlantComponent', () => {
  let component: MyPlantComponent;
  let fixture: ComponentFixture<MyPlantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPlantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
