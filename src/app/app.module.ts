import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { PomPage } from '../pages/pom/pom';
import { KnewPage } from '../pages/knew/knew';
import { PeePage } from '../pages/pee/pee';
import {JormPage} from '../pages/jorm/jorm';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PomPage,
    KnewPage,
    PeePage,
    JormPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PomPage,
    KnewPage,
    PeePage,
    JormPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
