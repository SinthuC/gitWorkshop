import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JormPage } from '../jorm/jorm';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoJormPage(){
    this.navCtrl.push(JormPage);
  }

}
