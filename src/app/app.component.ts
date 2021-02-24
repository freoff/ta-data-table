import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'table';

  editClick($event: any): void {
    confirm('Clicked ' + $event) ? console.log('success') : console.log('false');
  }
}
