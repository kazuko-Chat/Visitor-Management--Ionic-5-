import { Component, OnInit } from '@angular/core';
import {CommonFunctionService} from '../../../../providers/common-function/common-function.service';
import {HttpServiceService} from '../../../../providers/http-service/http-service.service';
import { config } from '../../../../shared/config';
import {  NavController  } from '@ionic/angular';
import {AppComponent} from '../../../app.component';
import * as moment from 'moment';
@Component({
  selector: 'app-visitors-list',
  templateUrl: './visitors-list.page.html',
  styleUrls: ['./visitors-list.page.scss'],
})
export class VisitorsListPage implements OnInit {
visitorsList : any = [];
  constructor(private appComponent: AppComponent,
    private commonFunctionService : CommonFunctionService,
    private httpServiceService : HttpServiceService,
    private navController: NavController) { }
    ngOnInit() {
    
    }

  ionViewDidEnter(){
    if(this.commonFunctionService.storageData['visitors']){
      this.visitorsList = this.commonFunctionService.storageData['visitors'];
      this.visitorsList.sort((b, a) => new Date(b.checkIn).getTime() - new Date(a.checkIn).getTime());
    }
  }

  addVisitor(){
    this.navController.navigateForward('visitor-add/0');
  }

  editVisitor(v){
  this.commonFunctionService.paramsStorage = v;
  this.navController.navigateForward('visitor-add/' + v.visitorsId);
  }
}
