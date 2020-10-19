import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSolicitationComponent } from './new-solicitation.component';

describe('NewSolicitationComponent', () => {
  let component: NewSolicitationComponent;
  let fixture: ComponentFixture<NewSolicitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSolicitationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSolicitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
