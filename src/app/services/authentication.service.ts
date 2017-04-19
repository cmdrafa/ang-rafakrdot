import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AppConfig } from '../app.config';

@Injectable()

export class AuthenticationService {
    constructor(private http: Http, private config: AppConfig) { }



    login(email: string, password: string) {
        console.log(email + " " + password);
        return this.http.post(this.config.apiUrl + '/authenticate', 
        { email: email, password: password }).map((response: Response) => {
            let user = response.json();
            if (user && user.token) {
                console.log('Token: ' + user.token)
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        })
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}