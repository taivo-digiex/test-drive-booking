import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCardComponent } from './list-card.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SearchBarModule } from '../search-bar/search-bar.module';

@NgModule({
  declarations: [ListCardComponent],
  imports: [CommonModule, FormsModule, IonicModule,SearchBarModule],
  exports: [ListCardComponent],
})
export class ListCardComponentModule {}
