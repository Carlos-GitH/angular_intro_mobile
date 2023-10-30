import { Injectable } from '@angular/core';
import { Pessoa } from '../model/pessoa.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { of, tap } from 'rxjs';

const URL = "assets/data/pessoas.json"

@Injectable({ providedIn: 'root' })
export class PessoaService {
    constructor(private http: HttpClient) {
    
    }

    salvar(pessoa: Pessoa): Observable<Pessoa> {
        return of (pessoa)
        .pipe(tap((p) => localStorage.setItem('pessoa', JSON.stringify(pessoa))) )
        localStorage.setItem('pessoas', JSON.stringify(pessoa))
    }

    listar(): Observable<Pessoa[]> {
        return this.http.get<Pessoa[]>(URL)
    }
}