import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAssignementComponent } from './dash-assignement.component';

describe('DashAssignementComponent', () => {
  let component: DashAssignementComponent;
  let fixture: ComponentFixture<DashAssignementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashAssignementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashAssignementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
