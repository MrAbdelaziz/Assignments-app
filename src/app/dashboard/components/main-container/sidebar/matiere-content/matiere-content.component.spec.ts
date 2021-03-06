import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiereContentComponent } from './matiere-content.component';

describe('MatiereContentComponent', () => {
  let component: MatiereContentComponent;
  let fixture: ComponentFixture<MatiereContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatiereContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatiereContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
