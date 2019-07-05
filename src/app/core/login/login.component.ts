import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  credentials = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService,
              private router: Router,
              private toast: MatSnackBar) { }

  login(){
    this.authService.login(this.credentials)
      .then(router => this.router.navigate(['/dashboard']))
        .catch(error => this.toast.open(error.message));
  }

  register(){
    this.authService.register(this.credentials)
      .then(toast => this.toast.open('Account created! Please click log in button now.'))
        .catch(error => this.toast.open(error.message));
  }

}
