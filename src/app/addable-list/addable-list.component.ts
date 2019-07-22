import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addable-list',
  templateUrl: './addable-list.component.html',
  styleUrls: ['./addable-list.component.css']
})
export class AddableListComponent implements OnInit {
  items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];

  constructor() {}

  ngOnInit() {}

  onAdd() {
    this.items.push({ id: 4, name: 'Item 4' });
  }

  onRemove(item) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
