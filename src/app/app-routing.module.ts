import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { redirectUnauthorizedTo, redirectLoggedInTo, AngularFireAuthGuard ,canActivate} from '@angular/fire/auth-guard';
import { ListActualiteComponent } from './actualite/list-actualite/list-actualite.component';
import { AddActualiteComponent } from './actualite/add-actualite/add-actualite.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Page404Component } from './page404/page404.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateActuComponent } from './actualite/update-actu/update-actu.component';
import { AcceuilComponent } from './acceuil/acceuil.component';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

export const routes: Routes = [
   
    { path: '', component: AcceuilComponent },
    { path: 'login', component: LoginComponent  },
    { path: 'dash',      component: DashboardComponent ,canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin }},
    { path: 'add-actu',      component: AddActualiteComponent ,canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin }},
    { path: 'user-profile',      component: UserProfileComponent ,canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin } },
    { path: 'user-list',      component: UserListComponent ,canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin } },
    { path: 'updateUser/:id',      component: UpdateUserComponent ,canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin } },
    { path: 'updateActu/:id',      component: UpdateActuComponent ,canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin } },
    { path: 'actu-list',      component: ListActualiteComponent ,canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin } }
  ];
//,canActivate: [AngularFireAuthGuard],data: { authGuardPipe: redirectUnauthorizedToLogin }
//...canActivate(redirectUnauthorizedToLogin)
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }


  
   