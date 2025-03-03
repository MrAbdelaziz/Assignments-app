import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
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
import {LoginComponent} from './dashboard/login/login.component';
import {MainContainerComponent} from './dashboard/main-container/main-container.component';
import {SidebarComponent} from './dashboard/main-container/sidebar/sidebar.component';
import {DevoirAreaComponent} from './dashboard/main-container/content/devoir-area.component';
import {DevoirDefaultPageComponent} from './dashboard/main-container/content/devoir-default-page/devoir-default-page.component';
import {HttpClientModule} from '@angular/common/http';
import {authInterceptorProviders} from './_helpers/auth.interceptor';
import {AssignementContentComponent} from './dashboard/main-container/sidebar/assignments-content/assignement-content.component';
import {MatiereContentComponent} from './dashboard/main-container/sidebar/matiere-content/matiere-content.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {AddDevoirComponent} from './dashboard/main-container/content/devoir-page/add-devoir.component';
import {ModalComponent} from './dashboard/main-container/content/devoir-page/add-modal/modal.component';
import {ModalEditComponent} from './dashboard/main-container/content/devoir-page/edit-modal/modal-edit.component';
import {ModalDevoirComponent} from './dashboard/main-container/sidebar/assignments-content/modal-devoir/modal-devoir.component';
import {ModalActionsComponent} from './dashboard/main-container/sidebar/assignments-content/modal-actions/modal-actions.component';
import {UserContentComponent} from './dashboard/main-container/sidebar/user-content/user-content.component';
import { MatiereActionsModalComponent } from './dashboard/main-container/sidebar/matiere-content/matiere-actions-modal/matiere-actions-modal.component';
import { MatiereAddModalComponent } from './dashboard/main-container/sidebar/matiere-content/matiere-add-modal/matiere-add-modal.component';
import { UserAddModalComponent } from './dashboard/main-container/sidebar/user-content/user-add-modal/user-add-modal.component';
import { UserActionsModalComponent } from './dashboard/main-container/sidebar/user-content/user-actions-modal/user-actions-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainContainerComponent,
    SidebarComponent,
    DevoirAreaComponent,
    DevoirDefaultPageComponent,
    AssignementContentComponent,
    MatiereContentComponent,
    AddDevoirComponent,
    ModalComponent,
    ModalEditComponent,
    ModalDevoirComponent,
    ModalActionsComponent,
    UserContentComponent,
    MatiereActionsModalComponent,
    MatiereAddModalComponent,
    UserAddModalComponent,
    UserActionsModalComponent
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
    HttpClientModule,
    ScrollingModule
  ],
  providers: [
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
