import { Component, OnInit } from '@angular/core';
import {CommonFunctionService} from '../../../providers/common-function/common-function.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  newsDetails : any = {};
  constructor(
    private commonFunctionService : CommonFunctionService) { 
      this.newsDetails = this.commonFunctionService.paramsStorage;
    }

  ngOnInit() {
  }

}
