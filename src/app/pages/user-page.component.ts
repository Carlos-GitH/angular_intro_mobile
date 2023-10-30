import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/users.service";
import { Observable } from "rxjs";
import { User } from "../model/user";


@Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
})

export class UserPageComponent implements OnInit {

    users!: Observable<User[]>

    constructor(private service: UserService) {
        
    }

    ngOnInit(): void { 
        this.users = this.service.getUsers()
    }

    editar(user: User) {
        const editado = user;
        editado.name = "Jebedeque"
        this.service.putUser(user.id, editado);
    }
    
    novoUser() {
        const user: User = {
            id: 2313,
            name: "Jobedeque",
            email: "jobedeque@ig.com.br"
        }
        this.service.postUser(user)
    }
}