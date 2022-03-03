import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperfirst'
})
export class UpperfirstPipe implements PipeTransform {

  transform(chaine : string) : string {
    //return chaine.charAt(0).toUpperCase() + chaine.slice(1).toLowerCase();
    let res = '';
    let caractere;
    let isNouveauMot = true;
    for (let i = 0; i < chaine.length; i++) {
    if (chaine[i] == ' ' || chaine[i] == '-') {
    caractere = chaine[i];
    isNouveauMot = true
    } else {
    if (isNouveauMot) {
    caractere = chaine[i].toUpperCase();
    isNouveauMot = false;
    } else
    caractere = chaine[i].toLowerCase();
    }
    
    res = res + caractere;
    }
    return res;
    }

}
