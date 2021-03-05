import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientLayoutComponent } from './client-side/client-layout.component';
import { ClientHomeComponent } from './client-side/contents/client-home/client-home.component';
import { DashLayoutComponent } from './dash-board/dash-layout.component';
import {DashLoginComponent} from './dash-board/contents/dash-login/dash-login.component';
import {DashHomeComponent} from './dash-board/contents/dash-home/dash-home.component';
import {DashSidebarComponent} from './dash-board/layout/dash-sidebar/dash-sidebar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


// Angular Material Components
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DashContentComponent } from './dash-board/layout/dash-content/dash-content.component';
import { DashDevoirComponent } from './dash-board/layout/dash-content/dash-devoir/dash-devoir.component';
import { DashAssignementComponent } from './dash-board/layout/dash-sidebar/dash-assignement/dash-assignement.component';
import { DashNewDevoirComponent } from './dash-board/layout/dash-content/dash-new-devoir/dash-new-devoir.component';
import { DashDefaultComponent } from './dash-board/layout/dash-content/dash-default/dash-default.component';
import { LoginComponent } from './dashboard/components/login/login.component';
import { MainContainerComponent } from './dashboard/components/main-container/main-container.component';
import { SidebarComponent } from './dashboard/components/main-container/sidebar/sidebar.component';
import { SidebarContentComponent } from './dashboard/components/main-container/sidebar/sidebar-content/sidebar-content.component';
import { DevoirAreaComponent } from './dashboard/components/main-container/devoir-area/devoir-area.component';
import { DevoirDefaultPageComponent } from './dashboard/components/main-container/devoir-area/devoir-default-page/devoir-default-page.component';
import { DevoirSectionComponent } from './dashboard/components/main-container/devoir-area/devoir-section/devoir-section.component';

import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    DashLayoutComponent,
    ClientLayoutComponent,
    ClientHomeComponent,
    DashLoginComponent,
    DashHomeComponent,
    DashSidebarComponent,
    DashContentComponent,
    DashDevoirComponent,
    DashAssignementComponent,
    DashNewDevoirComponent,
    DashDefaultComponent,
    LoginComponent,
    MainContainerComponent,
    SidebarComponent,
    SidebarContentComponent,
    DevoirAreaComponent,
    DevoirDefaultPageComponent,
    DevoirSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatIconModule,
    MatMenuModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
