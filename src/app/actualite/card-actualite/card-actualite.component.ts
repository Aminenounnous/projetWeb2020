import { Component, OnInit, Input } from '@angular/core';
import { Actu } from '../Actu';
import { GetActualiteService } from '../get-actualite.service';

@Component({
  selector: 'app-card-actualite',
  templateUrl: './card-actualite.component.html',
  styleUrls: ['./card-actualite.component.css']
})
export class CardActualiteComponent implements OnInit {
  
  @Input()
  public actu: Actu;
  constructor(private Actu: GetActualiteService) { }

  ngOnInit() {
  }
  delActu(){
    this.Actu.delActu(this.actu);
  }
  updateUsers(){
    this.Actu.updateActus(this.actu);
  }
}
