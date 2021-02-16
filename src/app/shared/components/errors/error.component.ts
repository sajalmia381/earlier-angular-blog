import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-error',
    template: `
        <div class="container">
            <div class="text-center py-5">
                <h2>{{ errorTitle || 'Internet Connection Occuared' }}</h2>
                <button (click)="reload.next()" class="btn btn-info btn-lg">Refresh</button>
            </div>
        </div>
    `
})

export class ErrorComponent {
    @Output() reload = new EventEmitter()

    @Input() errorTitle: string
}