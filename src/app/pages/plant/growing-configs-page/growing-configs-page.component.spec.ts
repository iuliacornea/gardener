import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowingConfigsPageComponent } from './growing-configs-page.component';

describe('GrowingConfigsPageComponent', () => {
  let component: GrowingConfigsPageComponent;
  let fixture: ComponentFixture<GrowingConfigsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowingConfigsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowingConfigsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
