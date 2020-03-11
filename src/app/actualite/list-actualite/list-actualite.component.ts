import { Component, OnInit } from '@angular/core';
import { Actu } from '../Actu';
import { GetActualiteService } from './../get-actualite.service';
import { userInfo } from 'os';
@Component({
  selector: 'app-list-actualite',
  templateUrl: './list-actualite.component.html',
  styleUrls: ['./list-actualite.component.css']
})
export class ListActualiteComponent implements OnInit {

  actus:Actu[];
  constructor(private getActus: GetActualiteService) { }

  ngOnInit() {
    
    this.getActus.getActus().subscribe(actus => this.actus = actus);
  }

}
