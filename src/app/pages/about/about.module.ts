import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutPage } from './about.page';
import { AboutPageRoutingModule } from './about-routing.module';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: AboutPage }]),
    AboutPageRoutingModule,
    TranslateModule
  ],
  declarations: [AboutPage],
  providers: [AppVersion]
})
export class AboutPageModule { }
