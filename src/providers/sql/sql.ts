import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SQLite, SQLiteObject, SQLiteDatabaseConfig } from '@ionic-native/sqlite';

/*
  Generated class for the SqlProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SqlProvider {
	database = null;
  private dbName:string = "RestauranteDiogo";
  private sqlite: SQLite = new SQLite();
  private platform: Platform = new Platform();
  private db: SQLiteObject;
  constructor() {
    this.sqlite.create({
      name: this.dbName + ".db",
      location: 'default'
    })
    .then((db: SQLiteObject) => {
      this.db = db;
      console.log("Conexão com banco de dados realizada com sucesso!");
      this.init();
    })
    .catch(e => console.log("Erro ao realizar conexão com banco de dados! Informações: " + e));
  }
  
  init(){
    this.createClient();
    this.createTable();
    this.createDish();
    this.createDishTableRelationship();
    this.createIndexes();
  }
  
  execute(sqlCommand:string){
    this.db.executeSql(sqlCommand, {})
        .then((res) => alert('Consulta SQL executada: ' + JSON.stringify(res)))
        .catch(e =>alert("Erro ao executar consulta SQL: " + e.message));
  }

  createClient(){
    this.execute('CREATE TABLE IF NOT EXISTS "Cliente"('+
        '"id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,'+
        '"nome" VARCHAR(50) NOT NULL,'+
        '"email" VARCHAR(45) DEFAULT NULL,'+
        '"endereco" VARCHAR(45) DEFAULT NULL);'
    );
  }

  createTable(){
    this.execute(
      'CREATE TABLE IF NOT EXISTS "Mesa"('+
      '"id" INTEGER PRIMARY KEY AUTOINCREMENT,'+
      '"idCliente" INTEGER,'+
      '"numero" INTEGER NOT NULL,'+
      '"quantidadeCadeiras" INTEGER NOT NULL,'+
      'CONSTRAINT "id_mesa_cliente"'+
      '  FOREIGN KEY("id")'+
      '  REFERENCES "Cliente"("id")'+
      '  ON DELETE SET NULL'+
      '  ON UPDATE CASCADE);'
    );
  }

  createDish(){
    this.execute(
      'CREATE TABLE IF NOT EXISTS "Prato"('+
      '"id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,'+
      '"nome" VARCHAR(45) NOT NULL,'+
      '"descricao" TINYTEXT NOT NULL,'+
      '"numeroPessoas" INTEGER NOT NULL);'
    );
  }

  createDishTableRelationship(){
    this.execute(
      'CREATE TABLE IF NOT EXISTS "MesaPrato"('+
      '"idMesa" INTEGER NOT NULL,'+
      '"idPrato" INTEGER NOT NULL,'+
      'PRIMARY KEY("idMesa","idPrato"),'+
      'CONSTRAINT "id_mesaPrato_mesa"'+
      '  FOREIGN KEY("idMesa")'+
      '  REFERENCES "Mesa"("id"),'+
      'CONSTRAINT "id_mesaPrato_prato"'+
      '  FOREIGN KEY("idPrato")'+
      '  REFERENCES "Prato"("id")'+
      '  ON DELETE CASCADE'+
      '  ON UPDATE CASCADE);'
    );
  }

  createIndexes(){
    this.execute(
      'CREATE INDEX "MesaPrato.id_mesaPrato_prato_idx" ON "MesaPrato" ("idPrato");'
    );
  }

}
