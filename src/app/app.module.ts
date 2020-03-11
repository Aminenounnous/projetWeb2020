import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';


import { MatSelectModule} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card'; 
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatTableModule} from '@angular/material/table'; 
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

import { MenuComponent } from './menu/menu.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { ListActualiteComponent } from './actualite/list-actualite/list-actualite.component';
import { CardActualiteComponent } from './actualite/card-actualite/card-actualite.component';
import { AddActualiteComponent } from './actualite/add-actualite/add-actualite.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { Page404Component } from './page404/page404.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DialogMessageComponent } from './dialog-message/dialog-message.component';
import { UpdateActuComponent } from './actualite/update-actu/update-actu.component';
import { AcceuilComponent } from './acceuil/acceuil.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    UserProfileComponent,
    UserListComponent,
    UserCardComponent,
    ListActualiteComponent,
    CardActualiteComponent,
    AddActualiteComponent,
    DashboardComponent,
    Page404Component,
    UpdateUserComponent,
    DialogMessageComponent,
    UpdateActuComponent,
    AcceuilComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    MaterialModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule,
    MatMenuModule,
    MatDialogModule
   
    
  ],
  entryComponents:[DialogMessageComponent],
  providers: [AngularFireAuthGuard],
  bootstrap: [AppComponent]
})


export class AppModule { }
