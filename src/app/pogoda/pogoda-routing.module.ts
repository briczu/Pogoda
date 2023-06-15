import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PogodaPage } from './pogoda.page';

const routes: Routes = [
  {
    path: '',
    component: PogodaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PogodaPageRoutingModule {}
