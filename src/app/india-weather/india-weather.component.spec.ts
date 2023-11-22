import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaWeatherComponent } from './india-weather.component';

describe('IndiaWeatherComponent', () => {
  let component: IndiaWeatherComponent;
  let fixture: ComponentFixture<IndiaWeatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndiaWeatherComponent]
    });
    fixture = TestBed.createComponent(IndiaWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
