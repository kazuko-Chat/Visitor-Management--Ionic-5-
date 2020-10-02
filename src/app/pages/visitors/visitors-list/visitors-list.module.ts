import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitorsListPageRoutingModule } from './visitors-list-routing.module';
import { VisitorsListPage } from './visitors-list.page';
import { CommonPipeModule } from './../../../pipes/common.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitorsListPageRoutingModule,
    CommonPipeModule
  ],
  declarations: [VisitorsListPage ]
})
export class VisitorsListPageModule {}
