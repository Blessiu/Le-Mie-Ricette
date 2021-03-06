import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Info',
      url: '/info',
      icon: 'information-circle'
    },
    {
      title: 'Language',
      url: '/language',
      icon: 'options'
    },
    {
      title: 'Login/Logout',
      url: '/login',
      icon: 'key'
    },
    {
      title: 'Profilo',
      url: '/profilo',
      icon: 'contact'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.router.navigateByUrl('welcome');
      this.splashScreen.hide();
    });
  }
}
