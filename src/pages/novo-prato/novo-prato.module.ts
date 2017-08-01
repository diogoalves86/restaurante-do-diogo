import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovoPratoPage } from './novo-prato';

@NgModule({
  declarations: [
    NovoPratoPage,
  ],
  imports: [
    IonicPageModule.forChild(NovoPratoPage),
  ],
})
export class NovoPratoPageModule {}
