import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFirebasePage } from './edit-firebase.page';

describe('EditFirebasePage', () => {
  let component: EditFirebasePage;
  let fixture: ComponentFixture<EditFirebasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFirebasePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFirebasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
