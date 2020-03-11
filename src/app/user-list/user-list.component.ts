import { Component, OnInit, ViewChild } from '@angular/core';
import { GetUsersService } from './../GetUser/get-users.service';
import { User } from './../user';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  users:User[];
  constructor(private getUsers: GetUsersService) { 
    this.getUsers.getUsers().subscribe(users => this.users = users);

  }

  ngOnInit() {
  }
  
    
}


