import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Todos',
      url: '/listar-todos',
      icon: 'apps'
    },
    {
      title: 'Listar Firebase',
      url: '/listar-firebase',
      icon: 'apps'
    },
    {
      title: 'crear Firebase',
      url: '/create-fire-base',
      icon: 'apps'
    },
    {
      title: 'editar Firebase',
      url: '/edit-firebase',
      icon: 'apps'
    },
    {
      title: 'borrar Firebase',
      url: '/delete-firebase',
      icon: 'apps'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
