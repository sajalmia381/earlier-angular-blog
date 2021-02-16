import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";
import { UserCardComponent } from "./user-card/user-card.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserStateService } from "app/shared/services/user-state.service";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
    declarations: [UserListComponent, UserCardComponent],
    imports: [CommonModule, UserRoutingModule, SharedModule],
    providers: [ UserStateService ]
})
export class UserModule {}
