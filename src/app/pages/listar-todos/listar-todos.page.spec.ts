import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTodosPage } from './listar-todos.page';

describe('ListarTodosPage', () => {
  let component: ListarTodosPage;
  let fixture: ComponentFixture<ListarTodosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTodosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTodosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
