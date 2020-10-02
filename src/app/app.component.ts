import { Component, ViewChildren, QueryList } from '@angular/core';
import { Platform , IonRouterOutlet, NavController, AlertController} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {CommonFunctionService} from '../providers/common-function/common-function.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public isLoader :Boolean = false;
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
  public lastTimeBackPress = 0;
  public timePeriodToExit = 2000;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private commonFunctionService : CommonFunctionService,
    private router: Router,
    public navController : NavController,
    private alertController: AlertController) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.splashScreen.hide();
      this.statusBar.backgroundColorByHexString("#3880ff");

      this.initApp();
      this.backButtonEvent();
    });
  }

  initApp(){
    //this.commonFunctionService.storageData['visitors'] = [];
    this.commonFunctionService.ionicStorageGet();
  }

  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(0, () => {
      this.routerOutlets.forEach(async (outlet: IonRouterOutlet) => {
        if (this.router.url == '/home') {
          navigator['app'].exitApp();
        }
        if (this.router.url != '/home') {
          await this.navController.pop()
          // await this.location.back();
        } else if (this.router.url === '/home') {
          if (new Date().getTime() - this.lastTimeBackPress >= this.timePeriodToExit) {
            this.lastTimeBackPress = new Date().getTime();
            this.presentAlertConfirm();
          } else {
            navigator['app'].exitApp();
          }
        }
      });
    });
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      // header: 'Confirm!',
      message: 'Are you sure you want to exit the app?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => { }
      }, {
        text: 'Close App',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    });

    await alert.present();
  }
}
