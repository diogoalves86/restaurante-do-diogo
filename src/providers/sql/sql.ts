import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

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

  constructor() {
    this.sqlite = new SQLite();
    this.init();
  }
  
  private init(){
    this.connect();
  }

  private connect(){
    this.sqlite.create({
      name: this.dbName + ".db",
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
    this.db.executeSql(sqlCommand, {})
        .then((res) => console.log('Consulta SQL executada: ' + JSON.stringify(res)))
        //.then((res) => alert('Consulta SQL executada: ' + JSON.stringify(res)))
        .catch(e =>alert("Erro ao executar consulta SQL: " + e.message));
  }

}
