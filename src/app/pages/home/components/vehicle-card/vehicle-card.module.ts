import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleCardComponent } from './vehicle-card.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [VehicleCardComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [VehicleCardComponent],
})
export class VehicleCardComponentModule {}
