import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

const DB_NAME:string = "RestauranteDiogo";
declare var window:any;
var result:any;

function handleResult(res:any){
	result = res;
}

export function getResult(){
	return result;
}

/*
  Generated class for the SqlProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SqlProvider {
	database = null;
  private sqlite: SQLite;
  private db: SQLiteObject;
  private result:any;
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
  }

  private connectSqlite(){
    this.sqlite.create({
      name: DB_NAME + ".db",
      location: 'default'
    })
    .then((db: SQLiteObject) => {
      this.db = db;
      console.log("Conexão com banco de dados realizada com sucesso!");
    })
    .catch(e => console.log("Erro ao realizar conexão com banco de dados! Informações: " + e));
  }
  
  public execute(sqlCommand:string, params:Array<any> = [], callback = function(data){}){
  	if (this.db instanceof SQLiteObject)
  		return this.executeSqliteCommand(sqlCommand, params);
  	else
    	return this.executeWebSqlCommand(sqlCommand, params, callback);
  }

  public getResult(){
  	this.result = result;
  	return result;
  }

  private executeWebSqlCommand(sqlCommand:string, params:Array<any>, callback = function(data){}){
  	var finalResult = this.db.transaction(function (tx) {
	      tx.executeSql(sqlCommand, params, function(error, result) {
	      	handleResult(result.rows);
	      });
	    });
  }

  private executeSqliteCommand(sqlCommand:string, params:Array<any>){
  	return this.db.executeSql(sqlCommand, params)
        //.then((res) => console.log('Consulta SQL executada: ' + JSON.stringify(res)))
        .then((res) => alert('Consulta SQL executada: ' + JSON.stringify(res)))
        .catch(e =>alert("Erro ao executar consulta SQL: " + e.message));
  }

}
