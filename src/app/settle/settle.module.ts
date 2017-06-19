import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { SettleComponent } from './settle.component';
import { SettleRoutingModule } from './settle-routing.module';

@NgModule({
  imports: [
    SettleRoutingModule,
    FormsModule,
    CommonModule,
    ChartsModule
  ],
  declarations: [ SettleComponent ]
})
export class SettleModule { }
