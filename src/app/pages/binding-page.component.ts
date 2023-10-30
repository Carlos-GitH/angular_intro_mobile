import { Component } from "@angular/core"

@Component(
    {
        selector: 'app-binding',
        template: `
        <h1>img angular </h1>
        <img [src]="imagem" [style]="{width:width}"/>
        <div class="alert" [class]="{success: sucesso}">
            ALERTA
        </div>
        <button (click)="enviarDados()">Enviar</button>
        `,
        styles: [`
        .alert {
            color:red;
            width:200px;
            height:100px;
            border:1px solid blue;
            }
            .sucess: {
                /* background-color: green; */
                border: 5px solid green;
                /* color: white;  */
            }
            
        `]
    }
)
export class BindingPageComponent {
    imagem = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqbI3xjAIjXzowgCRipMGg-pvzdQvgmPCFEz6vNU_DpA&s"
    width = "50px"
    sucesso = true
    enviarDados() {
        this.sucesso = !this.sucesso
    }
}