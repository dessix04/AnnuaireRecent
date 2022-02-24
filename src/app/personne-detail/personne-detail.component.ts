import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../models/personne';

@Component({
  selector: 'app-personne-detail',
  templateUrl: './personne-detail.component.html',
  styleUrls: ['./personne-detail.component.css']
})
export class PersonneDetailComponent implements OnInit {
@Input()
pers !: Personne;
  constructor() { }

  ngOnInit(): void {
  }

}
