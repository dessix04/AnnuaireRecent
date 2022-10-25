import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  // L'URL de l'API REST
  private personnesURL = 'http://[::1]:3000/personnes'
  private compteURL = 'http://[::1]:3000/personnes/count'

  // les options de l'entete des requetes HTTP
  private httpOptions = {
    'headers': new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(private http: HttpClient) { }
  // service ou methode pour ajouter d'une nouvelle 
  ajouterPersonne(personne: Personne): Observable<Personne> {
    return this.http.post<Personne>(
      this.personnesURL, personne, this.httpOptions)
  }

  // suppression d'une personne 
  supprimer(personneASupprimer: Personne) {
    return this.http.delete<Personne>(
      this.personnesURL + '/' + personneASupprimer.id
    )
  }

   // mis à jour des dpnnées de la personne après modification 
   updatePersonnes(personne: Personne): Observable<Personne> {
    return this.http.put<Personne>(
      this.personnesURL, personne, this.httpOptions
    );
  }

  // recupération de la liste des personnes
  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(
      this.personnesURL
    );
  }
  // nombre de personnes enregistrées dans la base de données
  countPersonnes(): Observable<any> {
    return this.http.get<any>(
      this.compteURL
    ).pipe(tap((o) => console.log(o)))
  }

  // recupération de la personne via son identifiant
  getPersonnesId(id: number): Observable<Personne> {
    return this.http.get<Personne>(`http://[::1]:3000/personnes/${id}`)
      .pipe(tap((o) => console.log(o)))
  }
}
