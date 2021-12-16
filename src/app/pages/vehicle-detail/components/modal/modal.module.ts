import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule, IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ModalComponent]
})
export class ModalModule { }
