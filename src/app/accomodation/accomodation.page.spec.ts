import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccomodationPage } from './accomodation.page';

describe('AccomodationPage', () => {
  let component: AccomodationPage;
  let fixture: ComponentFixture<AccomodationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomodationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
