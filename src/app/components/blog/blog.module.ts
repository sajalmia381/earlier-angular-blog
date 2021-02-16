import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BlogRoutingModule } from "./blog-routing.module";
import { BlogListComponent } from "./blog-list/blog-list.component";
import { PostStateService } from '../../shared/services/blog-state.service';

@NgModule({
    declarations: [BlogListComponent],
    imports: [CommonModule, BlogRoutingModule],
    providers: [ PostStateService ]
})
export class BlogModule {}
