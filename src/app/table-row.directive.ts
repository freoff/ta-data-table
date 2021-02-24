import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[appTableRow]'
})
export class TableRowDirective {
  @Input()
  $implicit: string;
  constructor() { }

}
