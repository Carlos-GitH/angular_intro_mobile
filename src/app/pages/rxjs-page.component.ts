import { Component, OnInit } from '@angular/core';
import { Observable, of, interval, Subscription, map, filter, tap, range, BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-rxjs',
    templateUrl: './rxjs-page.component.html'
})

export class RXJSPageComponent implements OnInit {
    
    items: Array<number> =  []

    subscription!: Subscription
    subscription2!: Subscription

    observable = interval(1000)
    observable2 = range(1, 10)
    subject = new BehaviorSubject("Valor inicial")
    ultimoEvento = ""
    contador = 1

    constructor() {

    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }

    ngOnInit() {
        this.subscription2 = this.observable
        .pipe(
            map((x: number) => x * 2), 
            filter(x => x < 10000),
            tap((x)  => console.log(x)),
        )
        .subscribe((item) => {
            this.items.push(item)
        })
        // this.subscription2 = 
        // this.observable2
        // .pipe(
        //     map((x: number) => x * 2), 
        //     filter(x => x < 10),
        //     tap((x)  => console.log(x)),
        // )
        // .subscribe((item) => {
        //     this.items.push(item)
        // })
        this.subject.asObservable().subscribe((item) => {
            this.ultimoEvento = item
        })
    }
    unsubscribe() {
        this.subscription.unsubscribe()
    }
    
    emitirEvento() {
        this.subject.next("Novo valor" + this.contador)
        this.contador++
    }
}