import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashNewDevoirComponent } from './dash-new-devoir.component';

describe('DashNewDevoirComponent', () => {
  let component: DashNewDevoirComponent;
  let fixture: ComponentFixture<DashNewDevoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashNewDevoirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashNewDevoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
