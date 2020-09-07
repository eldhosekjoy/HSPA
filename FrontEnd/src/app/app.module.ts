import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule}  from "@angular/common/http"
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {BsDropdownModule} from 'ngx-bootstrap/dropdown'
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './Property/Property-card/Property-card.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './Services/housing.service';
import { AddPropertyComponent } from './Property/add-property/add-property.component';
import { Routes, RouterModule } from '@angular/router'
import { PropertyDetailComponent } from './Property/property-detail/property-detail.component';
import { UserLoginComponent } from './User/user-login/user-login.component';
import { UserRegisterComponent } from './User/user-register/user-register.component';
import { UserServiceService } from './Services/user-service.service';
import { AlertifyService } from './Services/alertify.service';
import { AuthService } from './Services/auth.service';

const appRoutes : Routes = [
  {path:'', component : PropertyListComponent},
  {path:'rent-property', component : PropertyListComponent},
  {path:'add-property', component : AddPropertyComponent},
  {path:'property-detail/:id', component : PropertyDetailComponent},
  {path:'user/login', component : UserLoginComponent},
  {path:'user/register', component : UserRegisterComponent},
  {path:'**', component : PropertyListComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
      NavBarComponent,
      AddPropertyComponent,
      PropertyDetailComponent,
      UserLoginComponent,
      UserRegisterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
  providers: [
    HousingService,
    UserServiceService,
    AlertifyService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
