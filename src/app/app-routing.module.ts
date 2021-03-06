import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainContainerComponent} from './dashboard/components/main-container/main-container.component';
import {DevoirDefaultPageComponent} from './dashboard/components/main-container/devoir-area/devoir-default-page/devoir-default-page.component';
import {LoginComponent} from './dashboard/components/login/login.component';
import {UserGuard} from './guards/user.guard';
import {AssignementContentComponent} from './dashboard/components/main-container/sidebar/assignement-content/assignement-content.component';
import {StudentContentComponent} from './dashboard/components/main-container/sidebar/student-content/student-content.component';
import {MatiereContentComponent} from './dashboard/components/main-container/sidebar/matiere-content/matiere-content.component';
import {AddAssignementComponent} from './dashboard/components/main-container/devoir-area/add-assignement/add-assignement.component';
import {AddDevoirComponent} from './dashboard/components/main-container/devoir-area/add-devoir/add-devoir.component';

/*
import {ClientLayoutComponent} from './client-side/client-layout.component';
import {DashLayoutComponent} from './dash-board/dash-layout.component';
import {ClientHomeComponent} from './client-side/contents/client-home/client-home.component';
import {DashLoginComponent} from './dash-board/contents/dash-login/dash-login.component';
import {DashHomeComponent} from './dash-board/contents/dash-home/dash-home.component';
import {DashDefaultComponent} from './dash-board/layout/dash-content/dash-default/dash-default.component';
*/

/*
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: DashHomeComponent },
      { path: 'login', component: DashLoginComponent},
      {
        path: 'assignement/:id',
        component: DashDefaultComponent
      }
      /!*
      { path: 'home', component: HomeDashComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'user', component: BoardUserComponent },
      { path: 'mod', component: BoardModeratorComponent },
      { path: 'admin', component: BoardAdminComponent },
      { path: 'utilisateurs', component: UsersCrudComponent },
      { path: 'monuments', component: MonumentComponent },
      { path: 'regions', component: RegionComponent },
      { path: 'categories', component: CategorieComponent },
      { path: 'types', component: TypeComponent }*!/
    ]
  },
  {
    path: 'web',
    component: ClientLayoutComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full' },
      {path: 'home', component: ClientHomeComponent}
    ]
  },
  {path: '**', redirectTo: 'web', pathMatch: 'full' },


];
*/

const routes: Routes = [
  {
    path: '',
    component: MainContainerComponent,
    children: [
     // { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'assignement/:id',
        component: AddDevoirComponent
      },
      {
        path: 'home',
        component: DevoirDefaultPageComponent,
      },
      {
        path: 'addAssignement',
        component: AddAssignementComponent,
      },
      {
        path: 'assignements',
        component: AssignementContentComponent,
        outlet: 'path'
      },
      {
        path: 'etudiants',
        component: StudentContentComponent,
      },
      {
        path: 'etudiants',
        component: StudentContentComponent,
        outlet: 'path'
      },
      {
        path: 'matieres',
        component: MatiereContentComponent,
      },
      {
        path: 'matieres',
        component: MatiereContentComponent,
        outlet: 'path'
      },
    ],
    canActivate: [UserGuard]
  }, {
    path: 'login',
    component: LoginComponent
  },
   {path: '**', redirectTo: 'login', pathMatch: 'full' },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
