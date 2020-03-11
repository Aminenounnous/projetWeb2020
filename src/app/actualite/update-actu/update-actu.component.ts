import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GetActualiteService } from '../get-actualite.service';


@Component({
  selector: 'app-update-actu',
  templateUrl: './update-actu.component.html',
  styleUrls: ['./update-actu.component.css']
})
export class UpdateActuComponent implements OnInit {

  constructor(private fb:FormBuilder,private actiroute:ActivatedRoute,
    private Actus: GetActualiteService,private router:Router) { }

    updateActuForm = this.fb.group({title:'',
    contenu:'',
    date:'',
  });
  
  ngOnInit() {
  
    let userId = '';
    this.actiroute.params.subscribe(params => {
      userId = params['id'];
    });
    this.Actus.getActu(userId).subscribe(user =>{
      
      this.updateActuForm= this.fb.group({
        id:userId,
        title:user.data().title,
        contenu:user.data().contenu,
        date:user.data().date
      })
  
    });
  
  }
  
  upActu() {
    this.Actus.updateActus(this.updateActuForm.value);
    this.router.navigate(['/actu-list']);
    
    

  }
  
  
  
  

}
