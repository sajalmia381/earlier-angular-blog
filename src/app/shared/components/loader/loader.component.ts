import { Component } from "@angular/core";

@Component({
    selector: 'app-loader',
    template: `
        <div class="container">
            <div class="d-flex justify-content-center align-items-center" style="height: 80vh">
                <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    `,
    styles: [``]
})

export class LoaderComponent {
    constructor() {}
}