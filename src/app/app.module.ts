import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule } from "@angular/common/http";

import { StoreModule } from "@ngrx/store";
import { rootReducers } from "./reducers";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SharedModule } from "./shared/shared.module";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        SharedModule,
        NgbModule,
        StoreModule.forRoot(rootReducers),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
