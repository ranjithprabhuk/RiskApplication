import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettleComponent } from './settle.component';

const routes: Routes = [
  {
    path: '',
    component: SettleComponent,
    data: {
      title: 'Settle'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettleRoutingModule { }
