import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileListRoutingModule } from './mobile-list-routing.module';
import { MobileListComponent } from './mobile-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManageMobileModalComponent } from './manage-mobile-modal/manage-mobile-modal.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DeleteMobileModalComponent } from './delete-mobile-modal/delete-mobile-modal.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({
  declarations: [
    MobileListComponent,
    ManageMobileModalComponent,
    DeleteMobileModalComponent
  ],
  imports: [
    CommonModule,
    MobileListRoutingModule,
    FormsModule,
    NgbModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxSliderModule
  ]
})
export class MobileListModule { }
