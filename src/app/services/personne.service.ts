import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  // L'URL de l'API REST
 private personnesURL='http://localhost:3000/api/Personnes'
private compteURL= 'http://localhost:3000/api/Personnes/count'

 // les options de l'entete des requetes HTTP
  private httpOptions = {
    'headers': new HttpHeaders({'Content-Type': 'application/json'})
  }


  constructor(private http: HttpClient) { }

  ajouterPersonne (personne: Personne) : Observable<Personne>{
    return this.http.post<Personne>(
      this.personnesURL, personne, this.httpOptions
)

  // <div class="alert"> <div *ngIf="champNom.invalid ">
 // le nom n'est pas correct
 // </div>
  }
  countPersonnes(): Observable<any>{
    return this.http.get<Personne>(
      this.compteURL
    )
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
