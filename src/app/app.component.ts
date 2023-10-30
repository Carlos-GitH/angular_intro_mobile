import { Component } from '@angular/core';
import { ClientService } from './services/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-primeira-aula';
  clientePremium = false;

  nome = "Carlos";
  descricao = "";

  valores = [{descricao: '0', nome: '0', id: 0}, {descricao: 'a', nome: 'a', id: 1}, {descricao: 'b', nome: 'b', id: 2}, {descricao: 'c', nome: 'c', id: 3}];
  data = new Date();

  constructor(private clientService: ClientService) {
    
  }
  adicionar() {
    this.valores.push({
      id: this.valores.length,
      nome: this.nome,
      descricao: this.descricao 
    });
  }
  remover() {
    this.valores.pop();
  }
  sayHello() {
    alert(this.clientService.sayHello());
  }
}

