import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { SqlProvider } from '../../providers/sql/sql';
import { MockProvider } from '../../providers/mock/mock';

/*
  Generated class for the BaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class BaseProvider {
	private sql:SqlProvider;
	private mock:MockProvider;

  constructor() {
    console.log('Hello BaseProvider Provider');
  	this.sql = new SqlProvider();
  	this.mock = new MockProvider();
  }

  public createDatabase(){
    this.createClient();
    this.createTable();
    this.createDish();
    this.createDishTableRelationship();
    this.createIndexes();
    this.makeMock();
  }

  private makeMock(){
  	this.verifyDatabase();
  }

  private verifyDatabase(){
  	this.sql.execute(
  		'SELECT COUNT(*) count FROM Cliente',
  		[],
  		function(data){
  			if (data[0].count == 0)
  				this.mock.generate();
  		}
		);
		//this.sql.execute('DELETE FROM Cliente');
  }

  private createClient(){
    this.sql.execute('CREATE TABLE IF NOT EXISTS "Cliente"('+
        '"id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,'+
        '"nome" VARCHAR(50) NOT NULL,'+
        '"email" VARCHAR(45) DEFAULT NULL,'+
        '"endereco" VARCHAR(45) DEFAULT NULL);'
    );
  }

  private createTable(){
    this.sql.execute(
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

  private createDish(){
    this.sql.execute(
      'CREATE TABLE IF NOT EXISTS "Prato"('+
      '"id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,'+
      '"nome" VARCHAR(45) NOT NULL,'+
      '"descricao" TINYTEXT NOT NULL,'+
      '"numeroPessoas" INTEGER NOT NULL);'
    );
  }

  private createDishTableRelationship(){
    this.sql.execute(
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

  private createIndexes(){
    this.sql.execute(
      'CREATE INDEX "MesaPrato.id_mesaPrato_prato_idx" ON "MesaPrato" ("idPrato");'
    );
  }

}
