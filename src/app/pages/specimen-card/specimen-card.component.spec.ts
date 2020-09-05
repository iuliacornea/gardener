import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecimenCardComponent } from './specimen-card.component';

describe('SpecimenCardComponent', () => {
  let component: SpecimenCardComponent;
  let fixture: ComponentFixture<SpecimenCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecimenCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecimenCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
