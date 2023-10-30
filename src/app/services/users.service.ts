import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../model/user";

const URL = "https://gorest.co.in/public/v2/users"

@Injectable({providedIn: 'root'})
export class UserService {
    constructor(private http: HttpClient) {
        
    }
    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(URL)
    }

    postUser(user:User) {
        this.http.post(URL, user)
        .subscribe(response => {
            console.log('Salvo')
        }, (error) => {
            console.error(error)
        } )
    }

    putUser(id: number, user: User) {
        this.http.put(`${URL}/${id}`, user)
        .subscribe(_ => {
            console.log('Salvo')
    }, (error) => {
            console.error(error)
        })
    }

    deleteUser(id: number) {
        this.http.delete(`${URL}/${id}`)
        .subscribe(_ => {
            console.log('Deletado')
        }, (error) => {
            console.error(error)
        })
    }
}