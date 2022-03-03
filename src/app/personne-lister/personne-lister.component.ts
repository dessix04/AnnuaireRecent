import { Component, OnInit } from '@angular/core';
import { Personne } from '../models/personne';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-personne-lister',
  templateUrl: './personne-lister.component.html',
  styleUrls: ['./personne-lister.component.css']
})
export class PersonneListerComponent implements OnInit {
personnesAAfficher : Personne[] = []
  constructor(private ps: PersonneService) { 
    this.ps.getPersonnes().subscribe(
      (personnesPubliées: Personne[]) => {
        this.personnesAAfficher = personnesPubliées}
    )
   // this.personnesAAfficher= ps.getPersonnes()
  }

  ngOnInit(): void {
  }
  traiterSuppressionPersonne(personneASupprimer: Personne){
    this.ps.supprimer(personneASupprimer).subscribe(
      () => {
        this.ps.getPersonnes().subscribe(
          (personnesPubliées: Personne[]) => {
            this.personnesAAfficher = personnesPubliées}
        )
       // this.personnesAAfficher= ps.getPersonnes()
      }
    )
   // this.ps.supprimer(personneASupprimer);
    //this.personnesAAfficher = this.ps.getPersonnes()
  }
}
