import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ClienteProvider } from '../../providers/cliente/cliente';
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
  private client : ClienteProvider;

  constructor() {
    this.client = new ClienteProvider();
    alert("Uma linha antes");
    this.client.get();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListarMesasPage');
  }

}