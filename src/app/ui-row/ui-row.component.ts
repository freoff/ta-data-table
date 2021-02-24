import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ui-row',
  templateUrl: './ui-row.component.html',
  styleUrls: ['./ui-row.component.sass']
})
export class UiRowComponent<T> implements OnInit {
  @Input()
  row: T;
  constructor() { }

  ngOnInit(): void {
  }

}
