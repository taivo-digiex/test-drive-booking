import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ListCardComponentModule } from './components/list-card/list-card.module';
import { SearchBarModule } from './components/search-bar/search-bar.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    ListCardComponentModule,
    SearchBarModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
