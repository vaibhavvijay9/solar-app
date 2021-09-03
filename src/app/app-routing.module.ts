import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductProcessComponent } from '@app/components/product-process/product-process.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: ProductProcessComponent
  // },
  {
    path: 'process',
    component: ProductProcessComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
