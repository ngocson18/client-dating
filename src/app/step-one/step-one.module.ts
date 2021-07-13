import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StepOnePageRoutingModule } from './step-one-routing.module';

import { StepOnePage } from './step-one.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StepOnePageRoutingModule,
  ],
  declarations: [StepOnePage]
})
export class StepOnePageModule {}
