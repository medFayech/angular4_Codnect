import{ CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';


@Injectable()
export class AuthGuard implements CanActivate{

    constructor( private afAuth: AngularFireAuth, private  routr:Router){}

    canActivate(): Observable<boolean>{
            return this.afAuth.authState.take(1).map(authState => !!authState)
            .do(authenticated => {
              if (!authenticated) {
                this.routr.navigate(['/email-login']);
              }
            });
        }
}