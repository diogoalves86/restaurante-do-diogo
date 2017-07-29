import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarMesasPage } from './listar-mesas';

@NgModule({
  declarations: [
    ListarMesasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarMesasPage),
  ],
})
export class ListarMesasPageModule {}
