import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})

export class ModalComponent implements OnInit {

  @Input() eng: string;
  @Input() vehicle: string;

  public formGroup: FormGroup;
  public datetime: Date;

  constructor(
    private fb: FormBuilder,
    private modalCtrl: ModalController,
    private alertController: AlertController,
    private toastController: ToastController) { }

  ngOnInit() {
    this.initForm();
  }

  async dismissModal() {
    await this.modalCtrl.dismiss();
  }

  async initForm() {
    this.formGroup = this.fb.group({
      name: [
        '',
        Validators.compose([Validators.required, Validators.minLength(2)])
      ],
      phone: [
        '',
        Validators.compose([Validators.required, Validators.pattern('^[0-9]+$')])
      ],
      email: [
        '',
        Validators.compose([Validators.email])
      ],
      vehicle: [this.vehicle],
      engine: [this.eng]
    });
  }

  async bookingForm() {
    return await this.submitBooking();
  }

  async submitBooking() {
    const alert = await this.alertController.create({
      header: 'Check your detail again',
      message: JSON.stringify(this.formGroup.value),
      buttons: [{
        text: 'Cancel',
        role: 'cancle',
      },
      {
        text: 'Confirm',
        role: 'confirm',
        handler: () => {
          this.formGroup.value['datetime'] = new Date().toLocaleString();
          this.dismissModal();
          this.presentToast();
        }
      }]
    });
    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Congratulation! booking successful.',
      duration: 2000
    });
    toast.present();
  }
}
