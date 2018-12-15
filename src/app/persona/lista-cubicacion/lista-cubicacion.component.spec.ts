import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCubicacionComponent } from './lista-cubicacion.component';

describe('ListaCubicacionComponent', () => {
  let component: ListaCubicacionComponent;
  let fixture: ComponentFixture<ListaCubicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCubicacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCubicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
