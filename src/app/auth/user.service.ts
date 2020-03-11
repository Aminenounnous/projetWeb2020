import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { FirebaseAuth } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  userEmail:string;
  email: string;
  user :any;
  
  constructor(private Auth: AngularFireAuth,private Database: AngularFirestore,private router: Router) { }
  
  getUserState() {
    return this.Auth.authState;
  }

  login( email: string, password: string): Promise<any> {
    return this.Auth.auth.signInWithEmailAndPassword(email, password)
    //.then(data => this.userEmail=data.user.email)
    
      .catch(error => {
        this.eventAuthError.next(error);
      });
        
  }
  getEmailUser(){
      
      
      return this.userEmail;
    
  }
  
  logout() {
    return this.Auth.auth.signOut();
  }
 
  
}
