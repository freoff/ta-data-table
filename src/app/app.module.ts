import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiTableComponent } from './ui-table/ui-table.component';
import { UiRowComponent } from './ui-row/ui-row.component';
import { UiHederComponent } from './ui-heder/ui-heder.component';
import { TableRowDirective } from './table-row.directive';
import { TableHeaderDirective } from './table-header.directive';
import { CustomRowComponent } from './custom-row/custom-row.component';

@NgModule({
  declarations: [
    AppComponent,
    UiTableComponent,
    UiRowComponent,
    UiHederComponent,
    TableRowDirective,
    TableHeaderDirective,
    CustomRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
