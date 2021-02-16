import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NgrxOperatorComponent } from "./ngrx-operator.component";

const routes: Routes = [
    {
        path: "ngrx-operator",
        component: NgrxOperatorComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NgrxOperatorRoutingModule {}
