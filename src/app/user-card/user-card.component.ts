import { Component, OnInit ,Input} from '@angular/core';
import { User } from './../user';
import { UserService } from '../auth/user.service';
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input()

  public user: User;
  constructor() { }

  ngOnInit() {
  }


}
