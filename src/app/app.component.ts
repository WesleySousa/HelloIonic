import { HomePage } from './../pages/home/home';
import { ListsPage } from './../pages/lists/lists';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav : Nav;

  rootPage: any = HomePage;
  pages: [{ title: string, component: any }];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      this.pages = [
        {
          title: 'Home', component: HomePage
        },
        {
          title: 'Lists', component: ListsPage
        }
      ];
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });


  }

  openPage(page: {title: string, component: any}): void {
    this.nav.setRoot(page.component);
  }

}

