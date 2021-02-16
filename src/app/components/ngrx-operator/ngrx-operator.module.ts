import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgrxOperatorRoutingModule } from "./ngrx-operator-routing.module";
import { NgrxOperatorComponent } from "./ngrx-operator.component";

@NgModule({
    declarations: [NgrxOperatorComponent],
    imports: [CommonModule, NgrxOperatorRoutingModule]
})
export class NgrxOperatorModule {}
