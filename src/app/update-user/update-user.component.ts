import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GetUsersService } from '../GetUser/get-users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private fb:FormBuilder,private actiroute:ActivatedRoute,
    private Users: GetUsersService) { }

  updateuserForm = this.fb.group({nom:'',
  prenom:'',
  email:'',
  numero:'',
  role:'',
  Url:'',
});

ngOnInit() {

  let userId = '';
  this.actiroute.params.subscribe(params => {
    userId = params['id'];
    console.log(userId);
  });
  this.Users.getUser(userId).subscribe(user =>{
    
    this.updateuserForm = this.fb.group({
      id:userId,
      nom:user.data().nom,
      prenom:user.data().prenom,
      email:user.data().email,
      role:user.data().role, 
      numero:user.data().numero, 
      Url:user.data().Url
    })

  });

}

update(){
  if(!this.updateuserForm.invalid){

    this.Users.updateUser(this.updateuserForm.value);
  }
}






}
