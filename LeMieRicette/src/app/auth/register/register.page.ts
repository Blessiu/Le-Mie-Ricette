import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  firstName: string;
  lastName: string;
  email: string;
  pass: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //Register
  Registrati(){
    console.log("First name: " + this.firstName);
    console.log("Last name: " + this.lastName);
    console.log("Email: " + this.email);
    console.log("Password: " + this.pass);
    this.router.navigateByUrl('home');
  }

}
