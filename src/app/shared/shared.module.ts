import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastComponent } from "./components/toast/toast.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { ErrorComponent } from "./components/errors/error.component";

// import { HeaderComponent } from "./components/header/header.component";
// import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
    declarations: [ToastComponent, LoaderComponent, ErrorComponent], // LayoutComponent, HeaderComponent
    imports: [ CommonModule, NgbModule ],
    exports: [
        NgbModule,
        ToastComponent, 
        LoaderComponent,
        ErrorComponent
    ]
})
export class SharedModule {}