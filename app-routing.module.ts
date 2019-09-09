import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentnameComponent } from './componentname/componentname.component';
import { Aug12Component } from './aug12/aug12.component';
import { IdcardComponent } from './idcard/idcard.component';
import { IdCard1Component } from './id-card1/id-card1.component';
import { Assignment11Component } from './assignment11/assignment11.component';
import { Assignment16Component } from './assignment16/assignment16.component';
import { FiltercomponentComponent } from './filtercomponent/filtercomponent.component';
import { DolistComponent } from './dolist/dolist.component';
import { RestabComponent } from './restab/restab.component';
import { Aug20Component } from './aug20/aug20.component';
import { CouponComponent } from './coupon/coupon.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { Validation1Component } from './validation1/validation1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CrudComponent } from './crud/crud.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { Calc1Component } from './calc1/calc1.component';
import { UiregisterComponent } from './uiregister/uiregister.component';
import { UiloginComponent } from './uilogin/uilogin.component';
import { MovieComponent } from './movie/movie.component';
import { MovielistComponent } from './movielist/movielist.component';


const routes: Routes = [
  // { path: '', component: Assignment11Component },
  // { path: 'assi', component: Assignment11Component },
  // { path: 'aug12', component: Aug12Component },

  {path:'',component:Aug20Component},
  { path: 'aug20', component: Aug20Component },
  { path: 'coupon', component: CouponComponent },
  {path:'filtercomponent',component:FiltercomponentComponent},
  {path:'dolist',component:DolistComponent},
  {path:'restab',component:RestabComponent},
  {path:'calculator',component:CalculatorComponent},
  {path:'validation1',component:Validation1Component},
  {path:'navbar',component:NavbarComponent},
  {path:'curd',component:CrudComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'calc1',component:Calc1Component},
  {path:'uiregister',component:UiregisterComponent},
  {path:'uilogin',component:UiloginComponent},
  {path:'movie',component:MovieComponent},
  {path:'movielist',component:MovielistComponent}

  // {path:'',component:Assignment16Component},
  // {path:'',component:IdCard1Component},
  // {path:'idcard1',component:IdCard1Component},
  // {path:'',component:IdcardComponent},
  // {path:'idcard',component:IdcardComponent},

  // {path:'',component:IdcardComponent},
  // {path:'',component:Aug12Component},
 // // {path:'valid',component:ValidationComponent}
  // {path:'thumbnail',component:Aug12Component},
  //  {path:'componentname',component:ComponentnameComponent},
  // {path:'aug12',component:Aug12Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
