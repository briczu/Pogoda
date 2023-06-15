import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PogodaPage } from './pogoda.page';

describe('PogodaPage', () => {
  let component: PogodaPage;
  let fixture: ComponentFixture<PogodaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PogodaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
