import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientSideComponent } from './client-side/client-side.component';
import { DashLayoutComponent } from './dash-board/dash-layout.component';
import { ClientLayoutComponent } from './client-side/client-layout.component';
import { LoginComponent } from './Dash-Board/contents/login/login.component';
import { HomeComponent } from './client-side/contents/home/home.component';
import { ClientHomeComponent } from './client-side/contents/client-home/client-home.component';
import { DashLoginComponent } from './Dash-Board/contents/dash-login/dash-login.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientSideComponent,
    DashLayoutComponent,
    ClientLayoutComponent,
    LoginComponent,
    HomeComponent,
    ClientHomeComponent,
    DashLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
