import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleDetailPageRoutingModule } from './vehicle-detail-routing.module';

import { VehicleDetailPage } from './vehicle-detail.page';
import { ModalModule } from './components/modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleDetailPageRoutingModule,
    ModalModule
  ],
  declarations: [VehicleDetailPage]
})
export class VehicleDetailPageModule { }
