import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitorAddPageRoutingModule } from './visitor-add-routing.module';

import { VisitorAddPage } from './visitor-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitorAddPageRoutingModule
  ],
  declarations: [VisitorAddPage]
})
export class VisitorAddPageModule {}
