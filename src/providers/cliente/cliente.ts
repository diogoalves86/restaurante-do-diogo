import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { SqlProvider } from '../../providers/sql/sql';

/*
  Generated class for the ClienteProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ClienteProvider {
	private sql : SqlProvider;

  constructor() {
  	this.sql = new SqlProvider();
    console.log('Hello ClienteProvider Provider');
  }

  public get(){
  	alert(this.sql.execute("SELECT * FROM Cliente"));
  }

}