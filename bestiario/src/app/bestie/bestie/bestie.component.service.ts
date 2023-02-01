import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { environment } from "src/environments/environment";
import { BestieStore } from "./bestie.component.store";
import { Bestie } from "src/app/models/bestie.model";
@Injectable({
  providedIn: 'root',
})

export class BestieService{

  constructor(
    private store: BestieStore,
    private http: HttpClient){

  }

  readRecipes(){
    const url = environment.baseUrl + "/bestie";
    this.http.get<Bestie[]>(url).subscribe( bestia => this.store.readBeasts(bestia) )
  }
}
