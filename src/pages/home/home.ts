import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PeePage } from '../pee/pee'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  generatePee(){
    this.navCtrl.push(PeePage);
  }
}
