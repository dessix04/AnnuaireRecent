import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneListerComponent } from './personne-lister.component';

describe('PersonneListerComponent', () => {
  let component: PersonneListerComponent;
  let fixture: ComponentFixture<PersonneListerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonneListerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonneListerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
