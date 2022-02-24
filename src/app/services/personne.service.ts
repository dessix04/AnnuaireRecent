import { Injectable } from '@angular/core';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
 personnes: Personne[] = [];

  constructor() { }
  ajouterPersonne (personne: Personne){
    this.personnes.push(personne);
    console.log(this.personnes)
  }
  getPersonnes() : Personne[]{
    return this.personnes.slice()
  }
}
