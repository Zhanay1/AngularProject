import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForSpecialistsComponent } from './for-specialists.component';

describe('ForSpecialistsComponent', () => {
  let component: ForSpecialistsComponent;
  let fixture: ComponentFixture<ForSpecialistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForSpecialistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForSpecialistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
