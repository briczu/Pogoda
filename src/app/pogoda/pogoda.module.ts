import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PogodaPageRoutingModule } from './pogoda-routing.module';

import { PogodaPage } from './pogoda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PogodaPageRoutingModule
  ],
  declarations: [PogodaPage]
})
export class PogodaPageModule {}
