import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PessoaService } from '../../services/pessoa.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-pessoa-add-page',
  templateUrl: './pessoa-add-page.component.html',
  styleUrls: ['./pessoa-add-page.component.css']
})
export class PessoaAddPageComponent {

  pessoa: any = {}

  hobbies = [
    'Dançar',
    'Correr',
    'Jogar',
    'Estudar',
    'Dormir',
    'Trabalhar',
    'Ler'
  ]

  formGroup = this.formBuilder.group({
    nome: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.email])], 
    hobbie: ['']
  })
  constructor(private formBuilder: FormBuilder, private service: PessoaService) {}
salvar() {
  if(this.formGroup.valid) {
    this.service.salvar(this.formGroup.value)
    .subscribe(p=>{
      alert('Pessoa adicionada com sucesso')
    })
  } else {
  alert("Formulário inválido")
  }
}}
