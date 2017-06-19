import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { UnSettleComponent } from './unsettle.component';
import { UnSettleRoutingModule } from './unsettle-routing.module';

@NgModule({
  imports: [
    UnSettleRoutingModule,
    FormsModule,
    CommonModule,
    ChartsModule
  ],
  declarations: [ UnSettleComponent ]
})
export class UnSettleModule { }
