import { Component, OnDestroy, OnInit } from "@angular/core";
import { takeWhile } from "rxjs/operators";
import { User } from "app/shared/models/User";
import { UserStateService } from "app/shared/services/user-state.service";

@Component({
    selector: "app-user-list",
    templateUrl: "./user-list.component.html",
    styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit, OnDestroy {
    isAlive = true
    users: User[] = [];
    isError = false
    isLoading = false

    constructor(private repo: UserStateService) {}

    ngOnDestroy(): void {
        this.isAlive = false
    }

    ngOnInit(): void {
        this.fetchData();
    }

    reload() {
        this.repo.getUserList()
    }
    
    fetchData = () => {
        const observer = this.repo.getUserList();
        const loading$ = observer[1];
        const userData$ = observer[0];
        const error$ = observer[2]

        userData$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
            this.users = data
        })
        loading$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
            this.isLoading = data
        })
        error$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
            this.isError = data;
        });
        
        //// Preview Not Good Approch Code, Code Move to UserStateServie.ts
        // const loading$ = this.store.select(getUserLoading);
        // const loaded$ = this.store.select(getUserLoaded);
        // const getUserData = this.store.select(getUsers);

        // combineLatest([loaded$, loading$]).subscribe(data => {
        //     this.store.dispatch(new UserListRequestAction());
        //     if (!data[0] && !data[1]) {
        //         this.userService.getUsers().subscribe(users => {
        //             this.store.dispatch(new UserListSuccessAction({ users }));
        //         });
        //     }
        // });
        // getUserData.subscribe(users => {
        //     this.users = users;
        //     console.log(users);
        // });
    };

}
