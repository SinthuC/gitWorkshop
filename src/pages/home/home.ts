import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PomPage } from '../pom/pom';

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
}
