import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from '../models/personne';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  personne!: Personne;

  constructor( private personneService: PersonneService,
              private routeEdit: ActivatedRoute,
              private routerModifier: Router,) {}

  ngOnInit(): void {
    const id: string|null = this.routeEdit.snapshot.paramMap.get('id');
    if(id){
      this.personneService.getPersonnesId(+id).subscribe(personne => this.personne = personne )
    }
  }
  traiterFormulaire() {
    this.personneService.updatePersonnes(this.personne)
    .subscribe(() => this.routerModifier.navigate(['/personne-lister']))
  }

}
