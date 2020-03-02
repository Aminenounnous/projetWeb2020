import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';


export const routes: Routes = [
    { path: '',      redirectTo:'/login',pathMatch:'full' }, { path: 'login', component: LoginComponent  } ,{ path: 'menu',      component: MenuComponent  }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }