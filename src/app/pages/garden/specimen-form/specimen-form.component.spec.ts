import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecimenFormComponent } from './specimen-form.component';

describe('SpecimenFormComponent', () => {
  let component: SpecimenFormComponent;
  let fixture: ComponentFixture<SpecimenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecimenFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecimenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
