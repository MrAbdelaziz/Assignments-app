import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiereActionsModalComponent } from './matiere-actions-modal.component';

describe('MatiereActionsModalComponent', () => {
  let component: MatiereActionsModalComponent;
  let fixture: ComponentFixture<MatiereActionsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatiereActionsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatiereActionsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
