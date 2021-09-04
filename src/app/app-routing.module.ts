import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductProcessComponent } from '@app/components/product-process/product-process.component';
import { ProductOverviewComponent } from '@app/components/product-overview/product-overview.component';
import { ProductSpecsComponent } from '@app/components/product-specs/product-specs.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: ProductProcessComponent,
  //   pathMatch: 'full'
  // },
  {
    path: 'process',
    component: ProductProcessComponent
  },
  {
    path: 'overview/:productId',
    component: ProductOverviewComponent
  },
  {
    path: 'specs/:productId',
    component: ProductSpecsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
