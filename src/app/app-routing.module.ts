import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainContainerComponent} from './dashboard/components/main-container/main-container.component';
import {DevoirDefaultPageComponent} from './dashboard/components/main-container/content/devoir-default-page/devoir-default-page.component';
import {LoginComponent} from './dashboard/components/login/login.component';
import {UserGuard} from './guards/user.guard';
import {AssignementContentComponent} from './dashboard/components/main-container/sidebar/assignments-content/assignement-content.component';
import {MatiereContentComponent} from './dashboard/components/main-container/sidebar/matiere-content/matiere-content.component';
import {AddDevoirComponent} from './dashboard/components/main-container/content/devoir-page/add-devoir.component';
import {UserContentComponent} from './dashboard/components/main-container/sidebar/user-content/user-content.component';


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
        path: 'assignements',
        component: AssignementContentComponent,
        outlet: 'path'
      },
      {
        path: 'etudiants',
        component: UserContentComponent,
      },
      {
        path: 'etudiants',
        component: UserContentComponent,
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
  {path: '**', redirectTo: 'login', pathMatch: 'full'},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
