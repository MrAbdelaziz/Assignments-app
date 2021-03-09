import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiereAddModalComponent } from './matiere-add-modal.component';

describe('MatiereAddModalComponent', () => {
  let component: MatiereAddModalComponent;
  let fixture: ComponentFixture<MatiereAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatiereAddModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatiereAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
