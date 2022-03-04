import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompterPersonneComponent } from './compter-personne.component';

describe('CompterPersonneComponent', () => {
  let component: CompterPersonneComponent;
  let fixture: ComponentFixture<CompterPersonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompterPersonneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompterPersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
