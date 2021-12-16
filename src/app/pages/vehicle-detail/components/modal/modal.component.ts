import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})

export class ModalComponent implements OnInit {

  constructor(public routerOutlet: IonRouterOutlet, public fb: FormBuilder) { }

  public formGroup: FormGroup;

  ngOnInit() {
    this.initForm();
  }

  dismissModal() {

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
      date: [
        new Date().toDateString(),
        Validators.compose([Validators.required])
      ],
      time: [
        new Date().toTimeString().substring(0, 5),
        Validators.compose([Validators.required])
      ],
      car: [
        'NSX'
      ],
      engine: [
        'VTEC Gas'
      ],
    });

  }

  async bookingForm() {
    return await this.submitBooking();
  }

  async submitBooking() {
    if (!this.formGroup.valid) {
      alert('Please provide all the required values!')
      return false;
    } else {
      console.log(this.formGroup.value);
    }
  }

  get errorControl() {
    return this.formGroup.controls;
  }

  getDate(e) {
    let date = new Date(e.target.value).toDateString();
    let time = new Date(e.target.value).toTimeString().substring(0, 5);

    this.formGroup.get('date').setValue(date, {
      onlyself: true
    })

    this.formGroup.get('time').setValue(time, {
      onlyself: true
    })
  }
}
