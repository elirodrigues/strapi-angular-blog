import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// API EndPoint export
import {API_STRAPI} from '../../app.api';

// Models for users
import { User, UserResponse, Authenticator } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

	private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    private currentJWTSubject: BehaviorSubject<string>;
    public currentJWT: Observable<string>;
    
    user : User;
    cont : number = 1;
    aut1 : Authenticator;

 	constructor(private http: HttpClient) { 
 		this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('_cookieUser')));
        this.currentJWTSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('_cookieJWT')));
 		this.currentJWT = this.currentJWTSubject.asObservable();
        this.currentUser = this.currentUserSubject.asObservable();
 	}

 	public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    public get currentJWTValue(): any {
        return this.currentJWTSubject.value;
    }

    login(login: string, password: string) {

        this.aut1 = {identifier : login, password : password};
        let obj = this.aut1;
        let endpoint = `${API_STRAPI}/auth/local`;
        
        let json = JSON.stringify(obj);

        return this.http.post(endpoint, this.aut1)
        .pipe(map((data : UserResponse) => {
            localStorage.setItem('_cookieUser', JSON.stringify(data.user));
            localStorage.setItem('_cookieJWT', JSON.stringify(data.jwt));
            this.currentUserSubject.next(data.user);
            this.currentJWTSubject.next(data.jwt);
            return data.user;
        }));
    }

    logout() {
        localStorage.removeItem('_cookieUser');
        localStorage.removeItem('_cookieJWT');
        this.currentUserSubject.next(null);
        return true;
    }

    forgottenPassword(xemail) {
        let endpoint = `${API_STRAPI}/auth/forgot-password`;
        return this.http.post(endpoint, {"email": xemail})
    }

    resetPassword(xcode, xpassword1, xpassword2) {
        let endpoint = `${API_STRAPI}/auth/reset-password`;
        return this.http.post(endpoint, {"code": xcode, "password" : xpassword1, "passwordConfirmation" : xpassword2})
    }
}
