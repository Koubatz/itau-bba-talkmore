import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditSolicitationComponent } from './dialog-edit-solicitation.component';

describe('DialogEditSolicitationComponent', () => {
  let component: DialogEditSolicitationComponent;
  let fixture: ComponentFixture<DialogEditSolicitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEditSolicitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditSolicitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
