import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
})
export class ListCardComponent implements OnInit {

  @Input() car: any;

  constructor(private route: Router) { }

  ngOnInit() { }
}
