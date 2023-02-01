import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestieListaComponent } from './bestie-lista/bestie-lista/bestie-lista.component';
import { BestieComponent } from './bestie/bestie/bestie.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'bestie',
    component: BestieComponent,
  },
  {
    path: "bestie/:bestie_id", component: BestieListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
