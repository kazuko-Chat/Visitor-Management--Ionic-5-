import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpServiceService} from '../providers/http-service/http-service.service';
import { CommonFunctionService } from '../providers/common-function/common-function.service';
import {CommonModule} from './../common/common.module';

import { config } from '../shared/config';
import { Network } from '@ionic-native/network/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { CommonPipeModule } from './pipes/common.module';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    IonicStorageModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    CommonPipeModule],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    NativeStorage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: 'config', useValue: config},
    HttpServiceService,
    CommonFunctionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
