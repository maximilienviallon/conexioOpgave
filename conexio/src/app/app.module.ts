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
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MobileBeerCardComponent } from './mobile-beer-card/mobile-beer-card.component';
import { BrandingBannerComponent } from './branding-banner/branding-banner.component';
import { ViewToggleComponent } from './view-toggle/view-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableHeaderComponent,
    ButtonComponent,
    FilterComponent,
    TableComponent,
    TableCardComponent,
    LoadingSpinnerComponent,
    MobileBeerCardComponent,
    BrandingBannerComponent,
    ViewToggleComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
