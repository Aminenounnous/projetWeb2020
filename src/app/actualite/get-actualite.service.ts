import { Injectable } from '@angular/core';
import{ Actu } from './Actu'
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class GetActualiteService {
  actuCollection: AngularFirestoreCollection<Actu>;
  actus: Observable<Actu[]>;
  
  constructor(private firestore: AngularFirestore) { 
    this.actus= this.firestore.collection<Actu>('actualite').valueChanges({idField:'id'});
  }

 
  public getActus() {
    
    return this.actus;
  }
  getActu(userId: string) :Observable<any>{
    return this.firestore.collection('actualite').doc(userId).get()
    
  }
  public delActu(actu:Actu):Promise<void>{
  return this.firestore.collection<Actu>('actualite')
    .doc(actu.id).delete();
  }

public updateActus(actu:Actu):Promise<void>{


    return this.firestore.collection<Actu>('actualite')
    .doc(actu.id).update({
  
      "title":actu.title,
      "contenu":actu.contenu,
      "date":actu.date

    });
  }
  

}
