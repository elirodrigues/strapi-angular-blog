import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import {API_STRAPI} from '../../app.api';
import {User} from '../model/user.model';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class GenericalService {


  user : User;
  podeSeguir = false;
  jwt : string;

 
  constructor(private http : HttpClient, 
  			      private auth : AuthenticationService) { 
      /*
      this.auth.currentUser.subscribe((data : User) => {
           this.user = data;
      });
      this.auth.currentJWT.subscribe((data : any) => {
           this.jwt = data;
      });
      */
     
  }

  get(url) {
    /*
    let params = new HttpParams;
    let authorizationData = 'Bearer ' + this.jwt;
    let headerOptions = new HttpHeaders({ 
           'Content-Type': 'application/json',
           'Authorization' : authorizationData
    });
    return this.http.get(url,  { headers: headerOptions , params: params  });
    */
    return this.http.get(url);  
  }

  post(url, obj) {
    
    let json = JSON.stringify(obj);
    /*
    let authorizationData = 'Bearer ' + this.jwt;
    let headerOptions = new HttpHeaders({ 
           'Content-Type': 'application/json',
           'Authorization' : authorizationData
    });

    return  this.http.post(url, json, { headers: headerOptions})
    */
    return  this.http.post(url, json)
  }

   put(url, obj) {
    let json = JSON.stringify(obj);    
    /*
    let authorizationData = 'Bearer ' + this.jwt;
    let headerOptions = new HttpHeaders({ 
           'Content-Type': 'application/json',
           'Authorization' : authorizationData
    });
    return  this.http.put(url, json, { headers: headerOptions})
    */
    return  this.http.put(url, json)

  }

}
