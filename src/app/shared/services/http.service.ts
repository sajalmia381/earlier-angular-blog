import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private baseUrl = 'https://jsonplaceholder.typicode.com';
    authTokenKey = 'access_token';

    constructor(private http: HttpClient) {}

    get(endpoint, params?: any): Observable<any> {
        const data = { params, header: this.getAuthHeader() };

        return this.http.get(this.baseUrl + endpoint, data).pipe(catchError(this.errorHandler.bind(this)));
    }
    private errorHandler(response: any) {
        const error = response['error'];
        const keys = Object.keys(error);
        const key = keys[0];
        let message = error[key];
        if (response.status == '401') {
            // delete auth token
            localStorage.removeItem(this.authTokenKey);

            // redirect to login
        }
        if (error[key] instanceof Array) {
            message = error[key][0];
        }
        if (key === 'isTrusted') {
        } else {
            console.log(key, message);
            message = key + ': ' + message;
        }
        // call snackbar and show error with message
        return throwError({ messages: message }, error);
    }

    private getAuthHeader(): { [header: string]: string | string[] } {
        return {
            Authorization: `Bearer ${localStorage.getItem(this.authTokenKey)}`
        };
    }
}
