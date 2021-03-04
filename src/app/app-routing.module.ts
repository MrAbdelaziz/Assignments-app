import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientLayoutComponent} from './client-side/client-layout.component';
import {DashLayoutComponent} from './dash-board/dash-layout.component';
import {ClientHomeComponent} from './client-side/contents/client-home/client-home.component';
import {DashLoginComponent} from './dash-board/contents/dash-login/dash-login.component';
import {DashHomeComponent} from './dash-board/contents/dash-home/dash-home.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: DashHomeComponent },
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
    path: 'web',
    component: ClientLayoutComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full' },
      {path: 'home', component: ClientHomeComponent}
    ]
  },
  {path: '**', redirectTo: 'web', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
