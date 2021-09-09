import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './login-form/auth/auth.component';
import { RegisterComponent } from './login-form/register/register.component';
import { ForgotPasswordComponent } from './login-form/forgot-password/forgot-password.component';

@NgModule({
  declarations: [AppComponent, AuthComponent, RegisterComponent, ForgotPasswordComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
