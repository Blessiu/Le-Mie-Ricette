import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  user:string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  forgot(){
    console.log('Forgot password: ' + this.user);
    this.router.navigateByUrl('home');
  }
}
