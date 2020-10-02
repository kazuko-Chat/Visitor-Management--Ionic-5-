import { Component } from '@angular/core';
import {CommonFunctionService} from '../../../providers/common-function/common-function.service';
import {HttpServiceService} from '../../../providers/http-service/http-service.service';
import { config } from '../../../shared/config';
import {  NavController  } from '@ionic/angular';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 latestNews : any = [];
 visitorsList : any = [];
  constructor(private appComponent: AppComponent,
    private commonFunctionService : CommonFunctionService,
    private httpServiceService : HttpServiceService,
    private navController: NavController) {
      this.getLatestNews();
          this.visitorsList = this.commonFunctionService.storageData['visitors'];
    }
    getLatestNews(){
      this.appComponent.isLoader = true;
      this.httpServiceService.getRequest(config['getNews']).subscribe(data => {
        this.appComponent.isLoader = false;
        if (data['status'] == "ok") {
         // this.latestNews = data['articles'];
          this.latestNews = this.commonFunctionService.articleDummyData;
          console.log(this.commonFunctionService.articleDummyData);
        }
      },
        (error) => {
          console.log(error);
          this.appComponent.isLoader = false;
          this.latestNews = this.commonFunctionService.articleDummyData;
        });
    }

    addVisitor(){
      this.navController.navigateForward('visitor-add/0');
    }
    viewVisitors(){
      this.navController.navigateForward('visitors-list');
    }

    newsDetails(n){
      this.commonFunctionService.paramsStorage = n;
      this.navController.navigateForward('news');
    }
}
