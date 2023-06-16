import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileListComponent } from './mobile-list.component';

const routes: Routes = [
  {
    path:'',
    component:MobileListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileListRoutingModule { }
