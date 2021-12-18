import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() query: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }
  public handleInput(event) {
    let query = event.target.value.toLowerCase();
    this.query.emit(query);
  }
}
