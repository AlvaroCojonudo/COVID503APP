import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowcountryPage } from './showcountry.page';

const routes: Routes = [
  {
    path: '',
    component: ShowcountryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowcountryPageRoutingModule {}
