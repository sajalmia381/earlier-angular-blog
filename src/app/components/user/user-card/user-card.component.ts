import { Component, Input, OnInit } from "@angular/core";
import { User } from "app/shared/models/User";
import { UserStateService } from "app/shared/services/user-state.service";

@Component({
    selector: "app-user-card",
    templateUrl: "./user-card.component.html",
    styleUrls: ["./user-card.component.scss"]
})
export class UserCardComponent implements OnInit {
    @Input() user: User;

    constructor(private userStateService: UserStateService) {}

    ngOnInit(): void {}

    deleteUser (id) {
        this.userStateService.deleteUser(id)
    }
}
