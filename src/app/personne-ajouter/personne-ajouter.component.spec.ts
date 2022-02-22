import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneAjouterComponent } from './personne-ajouter.component';

describe('PersonneAjouterComponent', () => {
  let component: PersonneAjouterComponent;
  let fixture: ComponentFixture<PersonneAjouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonneAjouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonneAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
