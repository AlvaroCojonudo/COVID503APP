import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowcountryPageRoutingModule } from './showcountry-routing.module';

import { ShowcountryPage } from './showcountry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowcountryPageRoutingModule
  ],
  declarations: [ShowcountryPage]
})
export class ShowcountryPageModule {}
