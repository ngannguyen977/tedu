import {Injectable} from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SystemConstants } from '../../core/common/system.constants';
import { UrlConstants } from '../../core/common/url.constants';
@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private router: Router){ 
    }
    canActivate(activateRouter: ActivatedRouteSnapshot, routerState: RouterStateSnapshot){
        //neu hop le => true
        if(localStorage.getItem(SystemConstants.CURRENT_USER)){
            return true;
        }else{
            this.router.navigate([UrlConstants.LOGIN], {queryParams:{
                returnUrl: routerState.url
            }});
            return false;
        }
    }
}