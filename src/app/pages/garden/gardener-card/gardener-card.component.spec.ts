import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenerCardComponent } from './gardener-card.component';

describe('GardenerCardComponent', () => {
  let component: GardenerCardComponent;
  let fixture: ComponentFixture<GardenerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GardenerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GardenerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
