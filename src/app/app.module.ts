import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ListarMesasPage } from '../pages/listar-mesas/listar-mesas';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SqlProvider } from '../providers/sql/sql';
import { BaseProvider } from '../providers/base/base';
import { ClienteProvider } from '../providers/cliente/cliente';
import { MesaProvider } from '../providers/mesa/mesa';
import { PratoProvider } from '../providers/prato/prato';
import { MockProvider } from '../providers/mock/mock';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ListarMesasPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ListarMesasPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SqlProvider,
    BaseProvider,
    BaseProvider,
    ClienteProvider,
    MesaProvider,
    PratoProvider,
    MockProvider
  ]
})
export class AppModule {}
