import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCardComponent } from './list-card.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ListCardComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [ListCardComponent],
})
export class ListCardComponentModule {}
