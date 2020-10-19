import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySolicitationsComponent } from './my-solicitations.component';

describe('MySolicitationsComponent', () => {
  let component: MySolicitationsComponent;
  let fixture: ComponentFixture<MySolicitationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySolicitationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySolicitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
