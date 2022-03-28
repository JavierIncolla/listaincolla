import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAlumnoComponent } from './item-alumno.component';

describe('ItemAlumnoComponent', () => {
  let component: ItemAlumnoComponent;
  let fixture: ComponentFixture<ItemAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
