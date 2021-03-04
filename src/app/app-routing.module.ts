import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientLayoutComponent} from './client-side/client-layout.component';
import {DashLayoutComponent} from './dash-board/dash-layout.component';
import {ClientHomeComponent} from './client-side/contents/client-home/client-home.component';
import {DashLoginComponent} from './dash-board/contents/dash-login/dash-login.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'login', component: DashLoginComponent }
      /*
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
      { path: 'types', component: TypeComponent }*/
    ]
  },
  {
    path: 'client',
    component: ClientLayoutComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full' },
      {path: 'home', component: ClientHomeComponent}
    ]
  },
  {path: '**', redirectTo: 'client', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
