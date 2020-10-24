import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { TravelComponent } from './travel/travel.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "blog", component: BlogComponent
  },
  {
    path: "travel", component: TravelComponent
  },
  {
    path: "products/:productId", component: ProductDetailsComponent
  },
  {
    path: "my-booking", component: CartComponent
  },
  {
    path: "contact-us", component: ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
