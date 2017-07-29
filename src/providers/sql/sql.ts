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
  private sqlite: SQLite = new SQLite();
  private platform: Platform = new Platform();
  constructor() {
    this.sqlite.create({
      name: 'RestauranteDiogo.db',
      location: 'default'
    })
    .then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)', {})
        .then((res) => alert('Executed SQL ' + JSON.stringify(res)))
        .catch(e =>alert("Deu erro " + e.message));
    })
    .catch(e => console.log("Deu erro2 " + e));
  }

}
