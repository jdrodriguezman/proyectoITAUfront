import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFireBasePage } from './create-fire-base.page';

describe('CreateFireBasePage', () => {
  let component: CreateFireBasePage;
  let fixture: ComponentFixture<CreateFireBasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFireBasePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFireBasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
