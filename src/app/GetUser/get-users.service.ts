import { Injectable } from '@angular/core';
import{ User } from '.././User'
import { Observable, of } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {
  
  

  userCollection: AngularFirestoreCollection<User>;

  constructor(private firestore: AngularFirestore) { 
  }

  public getUsers():Observable<User[]> {
    
    return this.firestore.collection<User>('utilisateur').valueChanges({idField:'id'});
  }

  getUser(userId: string) :Observable<any>{
    return this.firestore.collection('utilisateur').doc(userId).get()
    
  }

  public updateUser(utilisateur:User):Promise<void>{


    return this.firestore.collection<User>('utilisateur')
    .doc(utilisateur.id).update({
      "nom":utilisateur.nom,
      "prenom":utilisateur.prenom,
      "email":utilisateur.email,
      "numero":utilisateur.numero,
      "role":utilisateur.role,
      "Url":utilisateur.Url

    });
  }

}
