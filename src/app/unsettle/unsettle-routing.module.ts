import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnSettleComponent } from './unsettle.component';

const routes: Routes = [
  {
    path: '',
    component: UnSettleComponent,
    data: {
      title: 'Unsettled Bets'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnSettleRoutingModule { }
