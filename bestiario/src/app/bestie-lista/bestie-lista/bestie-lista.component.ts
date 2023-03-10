import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bestie-lista',
  templateUrl: './bestie-lista.component.html',
  styleUrls: ['./bestie-lista.component.scss']
})
export class BestieListaComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute) {}

  ngOnInit(

  ): void {
    const id = Number(this.activatedRoute.snapshot.params['bestie_id']);
   // this.charactersService.loadCharacters(id);
  }



}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];
  // columns = [
  //   {
  //     columnDef: 'position',
  //     header: 'No.',
  //     cell: (element: PeriodicElement) => `${element.position}`,
  //   },
  //   {
  //     columnDef: 'name',
  //     header: 'Name',
  //     cell: (element: PeriodicElement) => `${element.name}`,
  //   },
  //   {
  //     columnDef: 'weight',
  //     header: 'Weight',
  //     cell: (element: PeriodicElement) => `${element.weight}`,
  //   },
  //   {
  //     columnDef: 'symbol',
  //     header: 'Symbol',
  //     cell: (element: PeriodicElement) => `${element.symbol}`,
  //   },
  // ];
  // dataSource = ELEMENT_DATA;
  // displayedColumns = this.columns.map(c => c.columnDef)



