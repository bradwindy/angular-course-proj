import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-card',
  templateUrl: './switch-card.component.html',
  styleUrls: ['./switch-card.component.css']
})
export class SwitchCardComponent implements OnInit {
  viewMode = 'one';

  constructor() {}

  ngOnInit() {}
}
