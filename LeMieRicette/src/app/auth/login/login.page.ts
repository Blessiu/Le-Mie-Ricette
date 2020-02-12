import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: string;
  pass: string;
  constructor(private routes:Router) { }

  ngOnInit() {
  }
  signIn(){
    console.log('Username: ' + this.user + ' Password: ' + this.pass);
    this.routes.navigateByUrl('home');
  }
}
