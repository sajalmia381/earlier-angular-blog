import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from './../../shared/shared.module';

import { BlogRoutingModule } from "./blog-routing.module";
import { BlogListComponent } from "./blog-list/blog-list.component";
import { PostsStateService } from '../../shared/services/blogs-state.service';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogAddComponent } from "./blog-add.component";
import { BlogUpdateComponent } from "./blog-update.component";

@NgModule({
    declarations: [BlogListComponent, BlogDetailComponent, BlogAddComponent, BlogUpdateComponent],
    imports: [ CommonModule, BlogRoutingModule, SharedModule, FormsModule ],
    providers: [ PostsStateService ]
})
export class BlogModule {}
