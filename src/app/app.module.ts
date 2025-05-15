import { LoginComponent } from './users/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import {SignupComponent} from './users/signup/signup.component'


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LoginComponent,
    SignupComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
