import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashDevoirComponent } from './dash-devoir.component';

describe('DashDevoirComponent', () => {
  let component: DashDevoirComponent;
  let fixture: ComponentFixture<DashDevoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashDevoirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashDevoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
