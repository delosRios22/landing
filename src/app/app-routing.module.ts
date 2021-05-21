import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { MisionComponent } from './components/mision/mision.component';
import { ProductsComponent } from './components/products/products.component';
import { VisionComponent } from './components/vision/vision.component';

const routes: Routes = [
  {path:'products', component	: ProductsComponent},
  {path:'vision', component	: VisionComponent},
  {path:'mision', component	: MisionComponent},
  {path:'contact', component	: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
