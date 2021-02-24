import {AfterContentInit, Component, ComponentRef, ContentChild, ElementRef, OnInit, TemplateRef} from '@angular/core';
import {UiRowComponent} from '../ui-row/ui-row.component';
import {TableRowDirective} from '../table-row.directive';

@Component({
  selector: 'app-ui-table',
  templateUrl: './ui-table.component.html',
  styleUrls: ['./ui-table.component.sass']
})
export class UiTableComponent implements OnInit, AfterContentInit {
  // @ContentChild(UiRowComponent, {read: ElementRef})
  @ContentChild(TableRowDirective, {read: TemplateRef})
  row: any;
  counter = 0;
  constructor() {
  }

  data = ['a', 'b', 'c'];

  ngOnInit(): void {
    setInterval(() => this.counter++, 1000)
  }

  ngAfterContentInit(): void {
    console.log('Row component', this.row);
  }

  getContext(item) {
    return {
      $implicit: item
    };
  }

}
