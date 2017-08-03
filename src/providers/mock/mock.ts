import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { SqlProvider } from '../../providers/sql/sql';

/*
  Generated class for the MockProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MockProvider {
	private sql : SqlProvider;
	
	private clients = [
		{nome:'Diogo', email:'diogo@email.com', endereco:'Endereço Diogo'},
		{nome:'Juliana', email:'juliana@email.com', endereco:'Endereço Juliana'},
		{nome:'Mayane', email:'mayane@email.com', endereco:'Endereço Mayane'},
		{nome:'Sylvia', email:'sylvia@email.com', endereco:'Endereço Sylvia'},
		{nome:'Reinaldo', email:'reinaldo@email.com', endereco:'Endereço Reinaldo'}
	];

	private dishes = [
		{nome:'Feijoada', descricao:'Feijoada com todos os ingredientes possíveis', numeroPessoas:1},
		{nome:'Macarrão', descricao:'Macarrão com todos os ingredientes possíveis', numeroPessoas:2},
		{nome:'Salada', descricao:'Salada com todos os ingredientes possíveis', numeroPessoas:1},
		{nome:'Hambúrguer', descricao:'Hambúrguer com todos os ingredientes possíveis', numeroPessoas:3},
		{nome:'Arroz maluco', descricao:'Arroz maluco com todos os ingredientes possíveis', numeroPessoas:2}
	];

  constructor() {
  	this.sql = new SqlProvider();
    console.log('Hello MockProvider Provider');
  }

  public generate(){
		console.log('Preenchendo dados iniciais do banco de dados');
		this.verifyData();
  	this.makeClient();
  	this.makeDishes();
		console.log('Dados iniciais preenchidos com sucesso!');
  }

  private verifyData(){
  	this.sql.execute(
  		'SELECT COUNT(*) count FROM Cliente',
  		[],
  		function(data){
  			if (data[0].count == 0){}
  				//TODO
			}
		);
  }

  private makeDishes(){
  	for (var i = this.dishes.length - 1; i >= 0; i--) {
	  	this.sql.execute(
	  			'INSERT INTO "Prato"(nome,descricao,numeroPessoas) VALUES (?, ?, ?)',
	  			[this.dishes[i].nome, this.dishes[i].descricao, this.dishes[i].numeroPessoas]
			);
  	}
  }

  private makeClient(){
  	for (var i = this.clients.length - 1; i >= 0; i--) {
	  	this.sql.execute(
	  			'INSERT INTO "Cliente"(nome,email,endereco) VALUES (?, ?, ?)',
	  			[this.clients[i].nome, this.clients[i].email, this.clients[i].endereco]
			);
  	}
  }

}
