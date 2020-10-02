import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorsListPage } from './visitors-list.page';

const routes: Routes = [
  {
    path: '',
    component: VisitorsListPage
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitorsListPageRoutingModule {}
