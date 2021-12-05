import { Component, OnInit, ViewChild } from '@angular/core';

import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
})
export class ListCardComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor() {}

  ngOnInit() {}

  public detailicon: string = 'chevron-forward';

  public data: any = [
    { car: 'Honda', year: 2000, desc: "New car" },
    { car: 'Suzuki', year: 2000, desc: "New car" },
    { car: 'BWM', year: 2000, desc: "New car" },
    { car: 'Mercedes-Benz', year: 2000, desc: "New car" },
    { car: 'Ford', year: 2000, desc: "New car" },
    { car: 'Toyota', year: 2000, desc: "New car" },
    { car: 'Subaru', year: 2000, desc: "New car" },
    { car: 'Mitsubishi', year: 2000, desc: "New car" },
    { car: 'Bugatti', year: 2000, desc: "New car" },
    { car: 'Lamborghini', year: 2000, desc: "New car" },
  ];

  loadData(event) {
    setTimeout(() => {
      event.target.complete();

      if (this.data.length == this.data.length) {
        event.target.disabled = true;
      }
    }, 500);
  }
}
