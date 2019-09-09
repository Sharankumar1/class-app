import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentnameComponent } from './componentname/componentname.component';
import { ServicenameService } from './servicename.service';
import { Aug12Component } from './aug12/aug12.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IdcardComponent } from './idcard/idcard.component';
import { IdCard1Component } from './id-card1/id-card1.component';
import { Assignment11Component } from './assignment11/assignment11.component';
import { Assignment16Component } from './assignment16/assignment16.component';
import { FiltercomponentComponent } from './filtercomponent/filtercomponent.component';
import { DolistComponent } from './dolist/dolist.component';
import { RestabComponent } from './restab/restab.component';
import { CouponComponent } from './coupon/coupon.component';
import { Aug20Component } from './aug20/aug20.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { Validation1Component } from './validation1/validation1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CrudComponent } from './crud/crud.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { Calc1Component } from './calc1/calc1.component';
import { UiregisterComponent } from './uiregister/uiregister.component';
import { UiloginComponent } from './uilogin/uilogin.component';
import { UiserviceService } from './uiservice.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './movie/movie.component';
import { MovielistComponent } from './movielist/movielist.component';
// import { Assignment10Component } from './id-card1/assignment10/assignment10.component'
@NgModule({
  declarations: [
    AppComponent,
    ComponentnameComponent,
    Aug12Component,
    IdcardComponent,
    IdCard1Component,
    CouponComponent,
    Aug20Component,
    Assignment11Component,
    Assignment16Component,
    FiltercomponentComponent,
    DolistComponent,
    RestabComponent,
    CalculatorComponent,
    Validation1Component,
    NavbarComponent,
    CrudComponent,
    CheckoutComponent,
    Calc1Component,
    UiregisterComponent,
    UiloginComponent,
    MovieComponent,
    MovielistComponent,
    // Assignment10Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [ServicenameService,UiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
