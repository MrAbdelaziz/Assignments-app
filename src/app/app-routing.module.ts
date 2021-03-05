import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainContainerComponent} from './dashboard/components/main-container/main-container.component';
import {DevoirSectionComponent} from './dashboard/components/main-container/devoir-area/devoir-section/devoir-section.component';
import {DevoirDefaultPageComponent} from './dashboard/components/main-container/devoir-area/devoir-default-page/devoir-default-page.component';
import {LoginComponent} from './dashboard/components/login/login.component';
import {UserGuard} from './guards/user.guard';

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
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'assignement/:id',
        component: DevoirSectionComponent
      },

      {
        path: 'home',
        component: DevoirDefaultPageComponent
      }
    ],
    canActivate: [UserGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },  {path: '**', redirectTo: '', pathMatch: 'full' },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
