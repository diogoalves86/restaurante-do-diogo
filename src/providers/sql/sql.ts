import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

const DB_NAME:string = "RestauranteDiogo";
declare var window:any;
/*
  Generated class for the SqlProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SqlProvider {
	database = null;
  private dbName:string = "RestauranteDiogo";
  private sqlite: SQLite;
  private db: SQLiteObject;
  private plat : Platform;

  constructor() {
    this.plat = new Platform();
    this.sqlite = new SQLite();
    this.init();
  }
  
  private init(){
    if(this.plat.is('cordova'))
      this.connectSqlite();
    else
      this.connectWebSql();
  }

  private connectWebSql(){
    this.db = window.openDatabase(DB_NAME, "1.0", "Restaurante Diogo", -1);
    alert("Conectou WebSQL");
    console.log(this.db);
  }

  private connectSqlite(){
    this.sqlite.create({
      name: DB_NAME + ".db",
      location: 'default'
    })
    .then((db: SQLiteObject) => {
      this.db = db;
      console.log("Conexão com banco de dados realizada com sucesso!");
      //alert("Conexão com banco de dados realizada com sucesso!");
    })
    //.catch(e => console.log("Erro ao realizar conexão com banco de dados! Informações: " + e));
    .catch(e => alert("Erro ao realizar conexão com banco de dados! Informações: " + e));
  }
  
  public execute(sqlCommand:string){
  	if (this.db instanceof SQLiteObject)
  		this.executeSqliteCommand(sqlCommand);
  	else
    	this.executeWebSqlCommand(sqlCommand);
  }

  private executeWebSqlCommand(sqlCommand:string){
  	this.db.transaction(function (tx) {
        tx.executeSql(sqlCommand);
    });
  }

  private executeSqliteCommand(sqlCommand:string){
  	this.db.executeSql(sqlCommand, {})
        //.then((res) => console.log('Consulta SQL executada: ' + JSON.stringify(res)))
        .then((res) => alert('Consulta SQL executada: ' + JSON.stringify(res)))
        .catch(e =>alert("Erro ao executar consulta SQL: " + e.message));
  }

}
