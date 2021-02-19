import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogListComponent } from "./blog-list/blog-list.component";
const routes: Routes = [
    {
        path: "",
        children: [
            {
                path: "blogs",
                component: BlogListComponent
            },
            {
                path: "blog/:id",
                component: BlogDetailComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule {}
