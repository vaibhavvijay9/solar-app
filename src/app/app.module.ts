import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '@app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '@app/app.component';
import { ProjectFormComponent } from '@app/components/project-form/project-form.component';
import { ProductsListComponent } from '@app/components/products-list/products-list.component';
import { ProductWorkingComponent } from '@app/components/product-working/product-working.component';
import { ProductCardComponent } from '@app/components/product-card/product-card.component';
import { TabViewComponent } from './components/tab-view/tab-view.component';
import { ProductProcessComponent } from './components/product-process/product-process.component';

import { FormsModule } from '@angular/forms';
import { ProductDetailsModalComponent } from './components/product-details-modal/product-details-modal.component';
import { ProductOverviewComponent } from './components/product-overview/product-overview.component';
import { ProductSpecsComponent } from './components/product-specs/product-specs.component';
@NgModule({
  declarations: [
    AppComponent,
    ProjectFormComponent,
    ProductsListComponent,
    ProductWorkingComponent,
    ProductCardComponent,
    TabViewComponent,
    ProductProcessComponent,
    ProductDetailsModalComponent,
    ProductOverviewComponent,
    ProductSpecsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
