import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { CommentStmt } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: any;

  // user$:  Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(res => {
      console.log('res', res);
        this.user$ = res;
       });
   }

  login = () => {
  this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logout = () => {
    this.afAuth.auth.signOut();
  }
}
