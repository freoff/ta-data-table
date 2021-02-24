
import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {UiRowComponent} from '../ui-row/ui-row.component';

@Component({
  selector: 'app-custom-row',
  templateUrl: './custom-row.component.html',
  styleUrls: ['./custom-row.component.sass']
})
export class CustomRowComponent extends UiRowComponent<any> implements OnInit {
  @Output()
  editClick = new EventEmitter<any>();

  constructor() {
    super();
  }

  ngOnInit(): void {
  }
  onEditClick() {
    this.editClick.next(this.row)
  }
}
