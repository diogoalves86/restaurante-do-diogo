import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { BaseProvider } from '../../providers/base/base';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	private provider : BaseProvider;
  private platform : Platform;

  constructor(public plat:Platform) {
  		//this.dbConfig.name = "RestauranteDiogo.db";
    this.platform = plat;
    this.init();
  }

  init(){
    this.platform.ready().then(()=>{
      this.provider = new BaseProvider();
      this.provider.createDatabase();
    });

  }
}
