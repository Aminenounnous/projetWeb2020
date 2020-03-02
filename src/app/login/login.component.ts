import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../model/login.model';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AngularFireAuth]
})

export class LoginComponent implements OnInit {

  user: LoginModel = new LoginModel();
  //userdata:firebase.User;
  loginForm: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder ,public auth: AngularFireAuth) { }
  getUserState(){
    return this.auth.authState;
  }
  login() {
    //alert(this.userdata.email);
    this.auth.auth.signInWithEmailAndPassword(this.loginForm.value.user,this.loginForm.value.password);
    
    
  }
  logout() {
    
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
    });

   // this.getUserState()
   // .subscribe(userdata=>{this.userdata=userdata;})
  }

  onLoginSubmit() {
    //alert(this.userdata.email);
  }

}
