import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './login/auth/auth.component';
import { RegisterComponent } from './login/register/register.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { TutorComponent } from './tutor/tutor.component';
import { StudentComponent } from './student/student.component';
import { AutocompliteComponent } from './additional-components/autocomplite/autocomplite.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    TutorComponent,
    StudentComponent,
    AutocompliteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
