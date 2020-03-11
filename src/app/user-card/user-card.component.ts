import { Component, OnInit ,Input} from '@angular/core';
import { User } from './../user';
import { UserService } from '../auth/user.service';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input()
  public user: User;


  constructor(private auth: AngularFireAuth) { }

  ngOnInit() {


  }


}
