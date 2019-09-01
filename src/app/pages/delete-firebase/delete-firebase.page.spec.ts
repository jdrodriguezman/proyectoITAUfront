import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFirebasePage } from './delete-firebase.page';

describe('DeleteFirebasePage', () => {
  let component: DeleteFirebasePage;
  let fixture: ComponentFixture<DeleteFirebasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFirebasePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFirebasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
