import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInfo } from 'firebase';


@Injectable({providedIn: 'root'})
export class AuthService {

  private userData: UserInfo;

  constructor(private fireAuth: AngularFireAuth) {}

  login(credentials: {email: string, password: string}) {
    return this.fireAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(userCredential => this.userData = userCredential.user);
  }

  register(credentials: {email: string, password: string}) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

  logout() {
    return this.fireAuth.auth.signOut();
  }
  isLoggedIn(){
    return !!this.userData;
  }
  get user() {
    return this.userData;
  }
}
