import { UserDeleteAction, UserListFail, UserListRequestAction } from './../../actions/userAction';
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { combineLatest, Observable } from "rxjs";
import { take } from "rxjs/operators";

import { getUserError, getUserLoaded, getUserLoading, getUsers, RootReducerState } from "app/reducers";
import { UserListSuccessAction } from "app/actions/userAction";
import { UserServie } from "./user.service";
import { User } from "../models/User";

@Injectable()
export class UserStateService {
    constructor(private userApiService: UserServie, private store: Store<RootReducerState>) {}

    getUserList(force = false): [Observable<User[]>, Observable<boolean>, Observable<boolean>] {
        const loaded$ = this.store.select(getUserLoaded);
        const loading$ = this.store.select(getUserLoading);
        const getUserData$ = this.store.select(getUsers);
        const error$ = this.store.select(getUserError)
        combineLatest([loaded$, loading$]).pipe(take(1)).subscribe(data => {
            if ((!data[0] && !data[1]) || force) {
                this.store.dispatch(new UserListRequestAction())
                this.userApiService.getUsers().subscribe(users => {
                    this.store.dispatch(new UserListSuccessAction({users}));
                }, error => {
                    this.store.dispatch(new UserListFail())
                });
            }
        });
        return [getUserData$, loading$, error$];
    }

    deleteUser (id: boolean) {
        // call Api
        this.store.dispatch(new UserDeleteAction({id}))
    }
}
