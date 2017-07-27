import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NovaPaginaPage } from '../nova-pagina/nova-pagina';
import { NovaPagina2Page } from '../nova-pagina2/nova-pagina2';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = NovaPaginaPage;
  tab5Root = NovaPagina2Page;

  constructor() {

  }
}
