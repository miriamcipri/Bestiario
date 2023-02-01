import { Categoria } from "./categoria.model";

export interface Bestie {
  id: number;
  nome: string;
  descrizione: string;
  categoria : Categoria;
  img: string;
}
