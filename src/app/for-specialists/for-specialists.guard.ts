import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
// import { LoggingService } from '../logging.service';

export class ForSpecialistsGuard implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
         
    return confirm('Вы уверены, что хотите перейти?');
}


}
