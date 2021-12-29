import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VehicleDetailPageRoutingModule } from './vehicle-detail-routing.module';
import { VehicleDetailPage } from './vehicle-detail.page';
import { ModalComponent } from './components/modal/modal.component';
import { TranslateModule } from '@ngx-translate/core';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleDetailPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule,
    SwiperModule
  ],
  declarations: [VehicleDetailPage, ModalComponent],
  entryComponents: [ModalComponent]
})
export class VehicleDetailPageModule { }
