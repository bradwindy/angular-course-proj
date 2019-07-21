import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  inputs: ['isFavourite']
})
export class FavouriteComponent implements OnInit {
  // this field is an input field and exposed to the outside
  @Input() isFavourite: boolean;

  constructor() {}

  ngOnInit() {}

  onFavouriteChange() {}

  onClick() {
    this.isFavourite = !this.isFavourite;
  }
}
