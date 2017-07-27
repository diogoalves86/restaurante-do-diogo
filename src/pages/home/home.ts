import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NovaPaginaPage } from '../nova-pagina/nova-pagina';
import { NovaPagina2Page } from '../nova-pagina2/nova-pagina2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
