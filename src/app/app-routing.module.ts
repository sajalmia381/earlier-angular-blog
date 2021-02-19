import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/users"
    },
    {
        path: "",
        loadChildren: () => import("./components/blog/blog.module").then(m => m.BlogModule)
    },
    {
        path: "",
        loadChildren: () => import("./components/user/user.module").then(m => m.UserModule)
    },
    {
        path: "",
        loadChildren: () => import("./components/ngrx-operator/ngrx-operator.module").then(m => m.NgrxOperatorModule)
    },
    {
        path: "",
        loadChildren: () => import('./components/contact/contact.module').then(m=>m.ContactModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
