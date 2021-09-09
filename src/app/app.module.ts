import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstNameInputComponent } from './components/first-name-input/first-name-input.component';
import { SecondNameInputComponent } from './components/second-name-input/second-name-input.component';
import { EmailInputComponent } from './components/email-input/email-input.component';
import { PassInputComponent } from './components/pass-input/pass-input.component';
import { ConfirmPassInputComponent } from './components/confirm-pass-input/confirm-pass-input.component';
import { RegBtnComponent } from './components/reg-btn/reg-btn.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { WrapperComponent } from './base/wrapper/wrapper.component';
import { BackgroundComponent } from './base/background/background.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstNameInputComponent,
    SecondNameInputComponent,
    EmailInputComponent,
    PassInputComponent,
    ConfirmPassInputComponent,
    RegBtnComponent,
    RegistrationFormComponent,
    WrapperComponent,
    BackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
