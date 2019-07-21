import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  // this field is an input field and exposed to the outside
  @Input('isFavourite') isFavourite: boolean;
  @Output('change') change = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.isFavourite = !this.isFavourite;
    this.change.emit(this.isFavourite);
  }
}
