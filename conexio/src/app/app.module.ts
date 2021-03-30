import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableHeaderComponent } from './table-header/table-header.component';
import { ButtonComponent } from './button/button.component';
import { FilterComponent } from './filter/filter.component';
import { TableComponent } from './table/table.component';
import { TableCardComponent } from './table-card/table-card.component';
import { CommonModule } from '@angular/common';
import { beerFilterPipe } from './table-card/table-card-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableHeaderComponent,
    ButtonComponent,
    FilterComponent,
    TableComponent,
    TableCardComponent,
    beerFilterPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
