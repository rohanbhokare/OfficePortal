import { RouterModule } from '@angular/router';
import { AuthService } from './_services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { JwtModule } from '@auth0/angular-jwt';
import { AlertifyService } from './_services/alertify.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';

export function tokenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      LoginFormComponent,
      DashboardComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      // RouterModule.forRoot(appRoute),
      JwtModule.forRoot({config: {
         tokenGetter: tokenGetter,
         whitelistedDomains: ['localhost:5000'],
         blacklistedRoutes: ['localhost:5000/api/auth']
      }})
   ],
   providers: [
      AuthService,
      AlertifyService,
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
