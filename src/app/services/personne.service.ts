import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  // L'URL de l'API REST
  personnesURL='http://localhost:3000/api/Personnes'
  


  constructor(private http: HttpClient) { }

  ajouterPersonne (personne: Personne){
  }

  supprimer ( personneASupprimer: Personne){
    return this.http.delete<Personne>(
      this.personnesURL + '/' + personneASupprimer.id
    )
  }

  getPersonnes() : Observable<Personne[]>{
   return this.http.get<Personne[]>(
     this.personnesURL
   );
  }
}
