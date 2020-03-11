import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../model/login.model';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../auth/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AngularFireAuth]
})

export class LoginComponent implements OnInit {

  authError: any;
  loginForm: FormGroup;
  hide = true;
  user: LoginModel = new LoginModel();

  constructor(private formBuilder: FormBuilder,private authuser: UserService) { }

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
    this.authuser.eventAuthError$.subscribe( data => {
      this.authError = data;
    });
  }

  login() {
    this.authuser.login(this.loginForm .value.email, this.loginForm.value.password);
    
    console.log(this.authuser.getEmailUser());
    
  }
  

}
  /*user: LoginModel = new LoginModel();
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
    

   // this.getUserState()
   // .subscribe(userdata=>{this.userdata=userdata;})
  }

  onLoginSubmit() {
    //alert(this.userdata.email);
/*
 public login(email:string, password:string): Promise<firebase.auth.UserCredential>{
    return this.afu.auth.signInWithEmailAndPassword(email,password)

  }



    if (this.loginForm.invalid) {
      console.log(this.loginForm.status);  // false

    }
    else{
      console.log(this.loginForm.status);  // true
      this.utilisateurService.login(this.loginForm.value.email,this.loginForm.value.motdepasse)
      .then(()=>{
        this.router.navigate(['/accueil']);
      }
      ).catch(() =>{
        console.log("erreur")
      });
      
    }
  }
  

}*/
