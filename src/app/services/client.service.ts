import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClientService {
    constructor() {
        
    }
    sayHello(){
        return 'Hello'
    }
}

// private http: HttpClient