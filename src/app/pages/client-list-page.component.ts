import { Component } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";


imports: [
    BrowserModule,
]

@Component({
    selector: 'app-client-list',
    templateUrl: './client-list-page.component.html',
})

export class ClientListPage {
    clientePremium = true
    clients = [
        {
            id: 1, 
            nome: 'Client1'
        },
        {
            id: 2, 
            nome: 'Client2'
        },
        {
            id: 3, 
            nome: 'Client3'
        },
    ]
}