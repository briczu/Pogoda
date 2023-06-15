import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'pogoda',
        loadChildren: () =>
          import('../pogoda/pogoda.module').then(
            (m) => m.PogodaPageModule
          ),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/pogoda',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
