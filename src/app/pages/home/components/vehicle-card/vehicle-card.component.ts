import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.scss'],
})
export class VehicleCardComponent implements OnInit {
  @Input() car: any;

  constructor(private route: Router) {}

  ngOnInit() {}
}
