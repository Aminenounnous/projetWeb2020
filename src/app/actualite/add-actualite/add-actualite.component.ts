import { Component, OnInit } from '@angular/core';

import { Validators, FormBuilder } from '@angular/forms';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Actu } from '../Actu';
import { MatDialog } from '@angular/material';
import { DialogMessageComponent } from 'src/app/dialog-message/dialog-message.component';
import { isNull } from 'util';

@Component({
  selector: 'app-add-actualite',
  templateUrl: './add-actualite.component.html',
  styleUrls: ['./add-actualite.component.css']
})
export class AddActualiteComponent implements OnInit {

  private ActuCollection: AngularFirestoreCollection<Actu>;

  ActuForm = this.form.group({
    title: ['', [Validators.minLength(10), Validators.required,Validators.nullValidator]],
    date: ['', [Validators.minLength(10), Validators.maxLength(10), Validators.required]],
    contenu: ['', [Validators.minLength(20), Validators.required]]
  });

  constructor(private firestore: AngularFirestore, private form: FormBuilder,public dialog:MatDialog) { 
    this.ActuCollection = firestore.collection<Actu>('actualite');
  }

  ngOnInit() {
  }

  opendialog(dialog){
    this.dialog.open(DialogMessageComponent);

  }
  AddActu() {
    
    const title = this.ActuForm.value.title;
    const date = this.ActuForm.value.date;
    const contenu = this.ActuForm.value.contenu;

    const actu: Actu = {title, date, contenu};
    this.ActuCollection.add(actu).then(dialog=>{
      this.opendialog(dialog);
      

    });
 
    
  }
}
