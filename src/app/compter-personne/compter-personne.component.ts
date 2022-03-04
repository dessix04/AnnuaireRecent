import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

import { Personne } from '../models/personne';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-compter-personne',
  templateUrl: './compter-personne.component.html',
  styleUrls: ['./compter-personne.component.css']
})
export class CompterPersonneComponent implements OnInit, OnChanges {

  nbPersonnes !: number;
  @Input()
  apresActualisation !: number;
  constructor(private ps: PersonneService) { }
  /**
   * initialisation de nbPersonnes
   * met à jour nbPersonnes
   * mis à jour des nbPersonnes après modification
   */
  modif() {
    this.ps.countPersonnes().subscribe(
      (objet : any) => { this.nbPersonnes = objet.count }
    )
  }
  ngOnInit(): void {
    this.modif();
  }
  ngOnChanges(changements: SimpleChanges): void {
    this.modif();
  }
}
