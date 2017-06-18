import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SettleComponent } from './settle.component';
import { SettleRoutingModule } from './settle-routing.module';

@NgModule({
  imports: [
    SettleRoutingModule,
    FormsModule,
    CommonModule
  ],
  declarations: [ SettleComponent ]
})
export class SettleModule { }
