import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { BaseProvider } from '../../providers/base/base';
/**
 * Generated class for the ListarMesasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listar-mesas',
  templateUrl: 'listar-mesas.html',
})
export class ListarMesasPage {
  private provider : BaseProvider;

  constructor() {
    //this.provider = new BaseProvider();
    //this.provider.createDatabase();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListarMesasPage');
  }

}