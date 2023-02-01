import { Injectable } from '@angular/core';
import { Bestie } from 'src/app/models/bestie.model';
import { Categoria } from 'src/app/models/categoria.model';

@Injectable({
  providedIn: 'root',
})
export class BestieStore {
  bestie: Bestie[] = [];
  categorie: Categoria[] = [];

  readBeasts(bestia: Bestie[]) {
    this.bestie = bestia;
  }
  readCategory(categoria: Categoria[]) {
    this.categorie = categoria;
  }

  updateBeasts(bestia: Bestie){
    this.bestie = this.bestie.map( modBestie => modBestie.id === bestia.id ? bestia : modBestie )
    //this.resetRecipe();
  }

  deleteBeasts(bestia: Bestie) {
    this.bestie = this.bestie.filter((okRecipe) => okRecipe.id !== bestia.id);
  }
}
