import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { SqlProvider } from '../../providers/sql/sql';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


import { ListarMesasPage } from '../listar-mesas/listar-mesas';
import { NovaPagina2Page } from '../nova-pagina2/nova-pagina2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	provider:SqlProvider;
	db: SQLite;
  constructor(public navCtrl: NavController, public platform:Platform) {
  		//this.dbConfig.name = "RestauranteDiogo.db";
  	this.db = new SQLite();
  	this.platform = new Platform();
  	this.platform.ready().then(()=>this.createDatabase());
  }

  createDatabase(){
   	this.db.create(
   		{
   			name: 'RestauranteDiogo.db',
   			location: 'default'
   		}
		 ).then((db: SQLiteObject) => {
      db.executeSql('create table kmartIndia(name VARCHAR(32))', {})
      .then((db) => { 
        console.log('Executed SQL');
      })
    });
  }

}
