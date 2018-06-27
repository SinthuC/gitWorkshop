import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PomPage } from '../pom/pom';
import {KnewPage} from '../knew/knew';
import { PeePage } from '../pee/pee';
import { JormPage } from '../jorm/jorm';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  goToPom(){
    this.navCtrl.push(PomPage);
  }
  knew(){
    this.navCtrl.push(KnewPage);
  }
  Pee(){
    this.navCtrl.push(PeePage);
  }
  gotoJormPage(){
    this.navCtrl.push(JormPage);
  }
}