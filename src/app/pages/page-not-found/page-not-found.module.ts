import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PageNotFoundPageRoutingModule } from './page-not-found-routing.module';
import { PageNotFoundPage } from './page-not-found.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule,
    IonicModule,
    PageNotFoundPageRoutingModule,
    TranslateModule
  ],
  declarations: [PageNotFoundPage],
})
export class PageNotFoundPageModule { }
