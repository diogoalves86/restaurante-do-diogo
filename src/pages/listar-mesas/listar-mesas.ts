import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SqlProvider } from '../../providers/sql/sql';
import { SQLite } from '@ionic-native/sqlite';
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
	sqlite: SQLite;
  private provider: SqlProvider;
	//sql: SqlProvider = new SqlProvider(sqlite:SQLite);
	mesas : any[] = [
  		{
	  		numero: 1,
	  		quantidadePessoas:2
  		},
  		{
  			numero: 2,
  			quantidadePessoas: 4
  		}
  	];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.provider = new SqlProvider();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListarMesasPage');
  }

}