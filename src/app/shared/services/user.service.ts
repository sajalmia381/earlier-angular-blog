import { HttpService } from "./http.service";
import { Injectable, OnInit } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class UserServie implements OnInit {
    constructor(private http: HttpService) {}
    ngOnInit(): void {}
    getUsers = () => this.http.get("/users");
}
