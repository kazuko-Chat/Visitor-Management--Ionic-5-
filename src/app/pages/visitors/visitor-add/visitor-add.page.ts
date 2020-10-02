import { Component, OnInit } from '@angular/core';
import {CommonFunctionService} from '../../../../providers/common-function/common-function.service';
import {  NavController  } from '@ionic/angular';
import {AppComponent} from '../../../app.component';
import * as moment from 'moment';
import { ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-visitor-add',
  templateUrl: './visitor-add.page.html',
  styleUrls: ['./visitor-add.page.scss'],
})
export class VisitorAddPage implements OnInit {
 visitorsForm : any ={};
  constructor(private commonFunctionService : CommonFunctionService,
    private navController: NavController,
    public activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    if(this.activatedRoute.snapshot.paramMap.get('id') != '0'){
     this.visitorsForm = this.commonFunctionService.paramsStorage;
    }
  }

  submit(){
    if(this.visitorsForm['name'] == '' || this.visitorsForm['name'] == undefined ||
    this.visitorsForm['email'] == '' || this.visitorsForm['email'] == undefined ||
    this.visitorsForm['typeOfVisit'] == '' || this.visitorsForm['typeOfVisit'] == undefined ||
    this.visitorsForm['toVisit'] == '' || this.visitorsForm['toVisit'] == undefined ||
    this.visitorsForm['checkIn'] == '' || this.visitorsForm['checkIn'] == undefined){
    this.commonFunctionService.presentToast('Please enter all the fields.')
    } else {
      if(this.validateEmail(this.visitorsForm['email'])){
      if(this.visitorsForm['checkOut'] != undefined){
        if(this.visitorsForm['checkOut'] < this.visitorsForm['checkIn'] ){
          this.commonFunctionService.presentToast('Please enter valid Check In and Check Out time')
        }
      }
       this.visitorsForm['createdDate'] = moment().format('DD MMM YYYY');;

       console.log(this.visitorsForm);
       if(this.activatedRoute.snapshot.paramMap.get('id') != '0'){
        var index= this.commonFunctionService.storageData['visitors'].map(x => {
          return x.visitorsId;
        }).indexOf(this.activatedRoute.snapshot.paramMap.get('id'));
        if(index != -1){
          this.commonFunctionService.presentToast('Visitor Updated successfully.');
          this.commonFunctionService.storageData['visitors'][index] = this.visitorsForm;
        }
       }else{
        this.visitorsForm['visitorsId'] = this.uuidv4();
        this.commonFunctionService.storageData['visitors'].unshift(this.visitorsForm);
        this.navController.back();
        this.commonFunctionService.presentToast('Visitor Added successfully.');
       }
       this.commonFunctionService.ionicStorageSet();
    }else{
      this.commonFunctionService.presentToast('Please enter valid email');
    }
  }
  }

  processData(){

  }

 uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  validateEmail(e) {
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(e).search (filter) != -1;
}
}
