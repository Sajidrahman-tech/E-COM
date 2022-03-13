import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CatproductComponent } from './catproduct/catproduct.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProductComponent } from './product/product.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [

{path:'',component:HomeComponent},
{path:'signup',component:SignUpComponent},
{path:'login',component:LogInComponent},
{path:'product/:id',component:ProductComponent},
{path:"cart",component:CartComponent},
{path:"category/:id",component:CatproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
