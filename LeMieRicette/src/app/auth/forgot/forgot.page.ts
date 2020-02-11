import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  user:string;
  constructor() { }

  ngOnInit() {
  }

  forgot(){
    console.log('Forgot password: ' + this.user);
  }
}
