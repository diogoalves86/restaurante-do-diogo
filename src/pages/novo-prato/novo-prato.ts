import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { SqlProvider } from '../../providers/sql/sql';

/**
 * Generated class for the NovoPratoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
const TABLE = "Prato";

@IonicPage()
@Component({
  selector: 'page-novo-prato',
  templateUrl: 'novo-prato.html',
})
export class NovoPratoPage {
	private sql : SqlProvider;

  constructor() {
  	this.sql = new SqlProvider();
  	alert("Vai fazer");
  	this.insert();
  	alert("Fez");
  }

  insert(){
  	this.sql.execute(
  		'INSERT INTO '+TABLE+' VALUES (1,"Teste", "descrição", 5);'
		);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovoPratoPage');
  }

}
